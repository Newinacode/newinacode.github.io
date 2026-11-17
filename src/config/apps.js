export const APPS = {
  terminal: {
    id: "terminal",
    name: "Terminal",
    title: "RupeshOS Terminal",
    icon: "/images/terminal.png",
    description: "A working command line. Try help, projects, or neofetch.",
    keywords: "console shell command line cli code",
  },
  brave: {
    id: "brave",
    name: "Brave",
    title: "Brave — Rupesh Acharya",
    icon: "/images/brave.png",
    description: "Browse my profile, projects, resume, and contact details.",
    keywords: "browser web portfolio website profile resume about",
  },
  portfolio: {
    id: "portfolio",
    name: "Resume",
    title: "Resume — Rupesh Acharya",
    icon: "/images/portfolio.png",
    description: "Preview and download my resume as a PDF.",
    keywords: "cv pdf document portfolio",
  },
  valorant: {
    id: "valorant",
    name: "Valorant",
    title: "Valorant",
    icon: "/images/valo2.png",
    description: "A little gaming break between deploys.",
    keywords: "game gaming riot sage fps",
  },
  fortnite: {
    id: "fortnite",
    name: "Fortnite",
    title: "Fortnite",
    icon: "/images/fn.png",
    description: "GGs. Find my Epic Games handle here.",
    keywords: "game gaming epic battle royale",
  },
  discord: {
    id: "discord",
    name: "Discord",
    title: "Discord",
    icon: "/images/discord.png",
    description: "Join the community server.",
    keywords: "chat community server invite",
  },
  taskmanager: {
    id: "taskmanager",
    name: "Task Manager",
    title: "Task Manager",
    icon: "/images/taskmanager.png",
    description: "See what is running, focused, or sleeping.",
    keywords: "processes system monitor apps",
  },
};

export const TASKBAR_APPS = [
  "terminal",
  "brave",
  "portfolio",
  "valorant",
  "fortnite",
  "discord",
  "taskmanager",
];

export const START_MENU_APPS = [
  "brave",
  "portfolio",
  "terminal",
  "taskmanager",
  "valorant",
  "fortnite",
  "discord",
];

export const DESKTOP_APPS = ["brave", "portfolio", "terminal", "taskmanager"];

export const WINDOW_SIZES = {
  terminal: "window-lg",
  brave: "window-xl",
  portfolio: "window-xl",
  valorant: "window-lg",
  fortnite: "window-md",
  discord: "window-md",
  taskmanager: "window-lg",
};
