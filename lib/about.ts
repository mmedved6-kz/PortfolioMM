export type AboutSectionId = "introduction" | "work-experience" | "education";

export type TimelineItem = {
  date: string;
  title: string;
  organisation: string;
  description: string;
  skills: string[];
};

export const ABOUT_SECTION_IDS: AboutSectionId[] = [
  "introduction",
  "work-experience",
  "education",
];

export const ABOUT_SECTION_LABELS: Record<AboutSectionId, string> = {
  introduction: "Introduction",
  "work-experience": "Work Experience",
  education: "Education",
};

export const ABOUT_INTRO = {
  heading: "About Me",
  subtitle:
    "Master's Student in Software Engineering with 1+ year of practical software engineering experience.",
  paragraphs: [
    "I focus on building practical web applications with clear structure, maintainable code, and user-friendly interfaces.",
    "My approach is simple: understand the problem, ship a clean first version, and improve it through feedback and iteration.",
  ],
};

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    date: "2023 - 2024",
    title: "Software Engineering Intern",
    organisation: "EventMAP",
    description:
      "Contributed to full-stack application development, feature implementation, debugging, and delivery in team-oriented workflows.",
    skills: ["Next.js", "TypeScript", "Node.js", "Git", "Debugging"],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    date: "2025 - Present",
    title: "Master's Degree in Software Engineering",
    organisation: "Heriot-Watt University",
    description:
      "Studying software architecture, engineering methods, and system design while applying theory in practical development projects.",
    skills: ["Software Architecture", "System Design", "Research", "Engineering Practices"],
  },
  {
    date: "2021 - 2025",
    title: "Bachelor's Degree in Computer Science",
    organisation: "Queen's University Belfast",
    description:
      "Gained a strong foundation in computer science principles, programming, and software development through coursework and projects.",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Team Projects"],
  }
];