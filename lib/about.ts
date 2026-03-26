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
    "Hi, I'm Medet, a software engineering master's student with 1+ years of practical experience in full-stack development.",
  paragraphs: [
    "I'm currently pursuing a master's degree in software engineering at Heriot-Watt University, Dubai, where I am deepening my knowledge of software architecture, engineering practices and scalable system design. I enjoy building practical products that combine clean code with thoughtful user experience.",
    "Previously, I worked as a Software Engineer Intern at EventMAP, where I contributed to developing and improving features, debugging and collaborating in a team environment. That experience helped me grow as an engineer and strengthened how I approach real world problem solving.",
    "Outside of study and development, I enjoy singing and karaoke, walking, photography and cooking. This keeps me alive and helps NOT to burn out from coding :)",
  ],
};

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    date: "2023 - 2024",
    title: "Software Engineering Intern",
    organisation: "EventMAP",
    description:
      "Built and maintained features for EventMAP's Timertabler product across frontend, backend. Contributed to product issue resolution, WCAG 2.1 accessibility improvements and milestone delivery with regular code review participation.",
    skills: ["React", "Vue.js", "Backbone.js", "Handlebars", "Node.js", "Typescript", "C#", "MySQL"],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    date: "2025 - Present",
    title: "Master's Degree in Software Engineering",
    organisation: "Heriot-Watt University, Dubai",
    description:
      "Studying software architecture, engineering methods, and system design while applying theory in practical development projects.",
    skills: ["Rigorous Methodologies", "System Design", "Applied DevOps", "Engineering Practices", "Team Projects", "Research"],
  },
  {
    date: "2021 - 2025",
    title: "Bachelor's Degree in Computer Science",
    organisation: "Queen's University Belfast",
    description:
      "Gained a strong foundation in computer science principles, programming, and software development through coursework and projects.",
    skills: ["Data Structures and Algorithms", "Database Systems", "Object-Oriented Programming", "Team Projects"],
  }
];