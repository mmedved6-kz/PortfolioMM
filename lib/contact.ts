export const contact = {
    email: process.env.CONTACT_EMAIL ?? "mmurzakhanov@gmail.com",
    github: process.env.CONTACT_GITHUB ?? "https://github.com/mmedved6-kz",
    linkedin: process.env.CONTACT_LINKEDIN ?? "https://www.linkedin.com/in/medetmurzakhanov/"
};

export function getContactMailto(subject: string, body?: string) {
    const subjectParam = encodeURIComponent(subject);
    const bodyParam = body ? `&body=${encodeURIComponent(body)}` : "";
    return `mailto:${contact.email}?subject=${subjectParam}${bodyParam}`;
}