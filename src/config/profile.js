export const PROFILE = {
  name: "Rupesh Acharya",
  firstName: "Rupesh",
  role: "Python Developer",
  tagline:
    "I build web applications, bots, and tools that make everyday life a little easier.",
  location: "Kathmandu, Nepal",
  email: "rupeshacharya2000@gmail.com",
  phone: "9861964194",
  phoneHref: "tel:+9779861964194",
  summary:
    "I'm a Python developer from Kathmandu, currently studying BSc.CSIT at Kathford International College. I enjoy turning ideas into practical products — from Discord bots and student communities to Flask and Django applications.",
  links: {
    github: "https://github.com/Newinacode",
    linkedin: "https://www.linkedin.com/in/rupesh-acharya-b893921b4/",
    email: "mailto:rupeshacharya2000@gmail.com",
    resume: "/documents/rupeshresume.pdf",
    discord: "https://discord.gg/KMMCEWsw6G",
    valorant: "https://playvalorant.com/",
    fortniteTracker:
      "https://fortnitetracker.com/profile/all/anka_lunaticnoob",
  },
  education: {
    degree: "BSc. Computer Science and Information Technology (BSc.CSIT)",
    school: "Kathford International College of Engineering and Management",
    location: "Kathmandu, Nepal",
    period: "2018 — Present",
  },
  skillGroups: [
    {
      label: "Languages",
      items: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["Django", "Flask", "React", "Discord.py"],
    },
    {
      label: "Tools & Fundamentals",
      items: ["Git & GitHub", "REST APIs", "Data Structures", "Algorithms"],
    },
  ],
  languages: [
    { name: "Nepali", level: "Native / Bilingual" },
    { name: "English", level: "Professional working" },
    { name: "Hindi", level: "Professional working" },
  ],
  projects: [
    {
      name: "Discord Bot",
      period: "Jun 2021 — Present",
      description:
        "A community bot that rewards active members with ranks based on their interaction in the server. The bot is powered by a Django API and Discord.py.",
      tags: ["Python", "Django", "Discord.py", "Heroku"],
      links: [
        {
          label: "API repo",
          href: "https://github.com/Newinacode/bot-api",
        },
        {
          label: "Bot repo",
          href: "https://github.com/Newinacode/discord-bot",
        },
      ],
    },
    {
      name: "Student Hub",
      period: "Jul 2020 — Present",
      description:
        "A networking platform for students in Nepal to ask questions, share answers, notes, and other educational resources.",
      tags: ["Python", "Django", "Web"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Newinacode/education_hub",
        },
      ],
    },
    {
      name: "E-Gunaso",
      period: "Jul 2022 — Present",
      description:
        "A Flask re-creation of the Hello Sarkar grievance portal, built to make submitting and tracking complaints simple.",
      tags: ["Python", "Flask", "Web"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Newinacode/e-gunaso",
        },
      ],
    },
    {
      name: "Portfolio OS",
      period: "2022 — Present",
      description:
        "This desktop-style portfolio — a small operating system in the browser with draggable windows, a start menu, a terminal, and several hidden corners to explore.",
      tags: ["React", "Redux", "Tailwind CSS"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Newinacode/newinacode.github.io",
        },
      ],
    },
  ],
};

export const NAV_PAGES = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
