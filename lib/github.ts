import { contact } from "@/lib/contact";

export type GithubActivity = {
  publicRepos: number;
  memberSince: number;
  latestCommit: { message: string; repo: string; url: string; date: string } | null;
  contributions: { total: number; weeks: number[][] } | null; // levels 0-4, only with GITHUB_TOKEN
};

const API = "https://api.github.com";
const REVALIDATE = 3600; // GitHub allows 60 unauthenticated requests/hour; one refresh an hour is plenty.

async function getJson<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { Accept: "application/vnd.github+json", ...init.headers },
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${url}`);
  return res.json() as Promise<T>;
}

async function getLatestCommit(handle: string): Promise<GithubActivity["latestCommit"]> {
  const [repo] = await getJson<{ full_name: string; name: string }[]>(`${API}/users/${handle}/repos?sort=pushed&per_page=1`);
  if (!repo) return null;

  const [commit] = await getJson<{ html_url: string; commit: { message: string; author: { date: string } } }[]>(
    `${API}/repos/${repo.full_name}/commits?per_page=1`,
  );
  if (!commit) return null;

  return {
    message: commit.commit.message.split("\n")[0],
    repo: repo.name,
    url: commit.html_url,
    date: commit.commit.author.date,
  };
}

const LEVELS: Record<string, number> = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

// The contribution calendar is only exposed via GraphQL, which requires a token.
async function getContributions(handle: string, weeksToShow = 20): Promise<GithubActivity["contributions"]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar {
    totalContributions weeks { contributionDays { contributionLevel } } } } } }`;

  const data = await getJson<{
    data: { user: { contributionsCollection: { contributionCalendar: {
      totalContributions: number; weeks: { contributionDays: { contributionLevel: string }[] }[];
    } } } };
  }>(`${API}/graphql`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ query, variables: { login: handle } }),
  });

  const calendar = data.data.user.contributionsCollection.contributionCalendar;
  return {
    total: calendar.totalContributions,
    weeks: calendar.weeks.slice(-weeksToShow).map((week) => week.contributionDays.map((day) => LEVELS[day.contributionLevel] ?? 0)),
  };
}

// Never throws: the home page must render even when GitHub is down or rate-limited.
export async function getGithubActivity(handle = contact.githubHandle): Promise<GithubActivity | null> {
  try {
    const [user, latestCommit, contributions] = await Promise.all([
      getJson<{ public_repos: number; created_at: string }>(`${API}/users/${handle}`),
      getLatestCommit(handle).catch(() => null),
      getContributions(handle).catch(() => null),
    ]);

    return {
      publicRepos: user.public_repos,
      memberSince: new Date(user.created_at).getFullYear(),
      latestCommit,
      contributions,
    };
  } catch {
    return null;
  }
}

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60],
];

// shortcut: computed at render, so it can lag by up to the revalidate window (1h); fine for "3 days ago" granularity.
export function timeAgo(iso: string, now = Date.now()) {
  const seconds = Math.round((new Date(iso).getTime() - now) / 1000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }
  return "just now";
}
