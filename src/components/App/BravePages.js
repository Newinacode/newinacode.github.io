import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiCopy,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTerminal,
  FiUser,
} from "react-icons/fi";
import { PROFILE } from "../../config/profile";

const accentClasses = [
  "border-t-sky-400",
  "border-t-violet-400",
  "border-t-emerald-400",
  "border-t-amber-400",
];

export function PageHeading({ eyebrow, title, lead }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8 sm:pt-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

const Tag = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600">
    {children}
  </span>
);

const SocialLinks = ({ className = "" }) => (
  <div className={`flex flex-wrap items-center gap-2 ${className}`}>
    <a
      href={PROFILE.links.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
    >
      <FiGithub size={14} /> GitHub
    </a>
    <a
      href={PROFILE.links.linkedin}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
    >
      <FiLinkedin size={14} /> LinkedIn
    </a>
    <a
      href={PROFILE.links.email}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
    >
      <FiMail size={14} /> Email
    </a>
  </div>
);

export function HomePage({ navigate }) {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/images/2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              {PROFILE.location}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I'm <span className="text-sky-300">Rupesh</span>.
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
              {PROFILE.role} · building useful things for the web.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              {PROFILE.tagline} Currently studying BSc.CSIT in Kathmandu and
              shipping projects around Python, Django, Flask, and React.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => navigate("projects")}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                View my work <FiArrowRight size={15} />
              </button>
              <a
                href={PROFILE.links.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                <FiDownload size={15} /> Download resume
              </a>
            </div>

            <SocialLinks className="mt-6" />
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/90 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  rupesh.py
                </span>
                <FiCode className="text-slate-600" size={13} />
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-6 text-slate-300 sm:text-[12px]">
{`from ambition import build, learn

class Developer:
    name     = "Rupesh Acharya"
    role     = "Python Developer"
    city     = "Kathmandu, Nepal"
    stack    = ["Python", "Django", "Flask", "React"]

    def currently(self):
        return "building things that work"

    def next(self):
        return "your project?"`}
              </pre>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["04", "projects"],
                ["03", "languages"],
                ["01", "goal now"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-center backdrop-blur"
                >
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
          What I do
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
          Practical code, from idea to deploy.
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: FiTerminal,
              title: "Backend & APIs",
              body: "Python services with Django and Flask, clean REST endpoints, and databases that stay out of the way.",
              tags: ["Python", "Django", "Flask"],
            },
            {
              icon: FiLayers,
              title: "Frontend & UI",
              body: "Responsive interfaces with React and Tailwind CSS — including this desktop-in-a-browser portfolio.",
              tags: ["React", "Tailwind CSS"],
            },
            {
              icon: FiCode,
              title: "Bots & automation",
              body: "Discord bots, API integrations, and small tools that remove repetitive work from a community.",
              tags: ["Discord.py", "APIs", "Git"],
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon size={17} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {item.body}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                Selected work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                Projects I've built.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("projects")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition hover:text-sky-700"
            >
              All projects <FiArrowRight size={13} />
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {PROFILE.projects.slice(0, 3).map((project, index) => (
              <article
                key={project.name}
                className={`flex flex-col rounded-2xl border border-slate-200 border-t-4 bg-slate-50/70 p-5 ${
                  accentClasses[index % accentClasses.length]
                }`}
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  {project.period}
                </p>
                <h3 className="mt-1.5 text-sm font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Let's talk
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Have an idea worth building?
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              I'm always up for a good problem, a collaboration, or a chat.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Get in touch <FiArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="pb-10">
      <PageHeading
        eyebrow="About me"
        title="A developer who likes turning small ideas into working products."
        lead={PROFILE.summary}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-sm font-semibold text-slate-900">My story</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                Most of what I know comes from building. A Discord bot that
                recognises active members, a student hub for sharing notes and
                answers, a Flask re-creation of a grievance portal — each one
                started as a small “can I make this?” and turned into a lesson
                in shipping.
              </p>
              <p>
                I like projects that solve a specific, real problem. I care
                about clear code, useful interfaces, and keeping the stack
                simple enough that the next feature is easy to add.
              </p>
              <p>
                Right now I'm finishing my BSc.CSIT and looking for
                opportunities to build software with a thoughtful team.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-sm font-semibold text-slate-900">
              Education
            </h3>
            <div className="mt-3 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 ring-1 ring-violet-100">
                <FiFileText size={17} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {PROFILE.education.degree}
                </p>
                <p className="text-xs text-slate-500">
                  {PROFILE.education.school}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {PROFILE.education.location} · {PROFILE.education.period}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-sm font-semibold text-slate-900">
              How I work
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Start useful",
                  body: "Ship the smallest version that solves the actual problem.",
                },
                {
                  title: "Keep it clear",
                  body: "Readable code and obvious interfaces beat clever code.",
                },
                {
                  title: "Keep learning",
                  body: "Every project should leave me with one new skill.",
                },
              ].map((item, index) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-3.5">
                  <p className="text-[10px] font-semibold text-sky-600">
                    0{index + 1}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Skills</h3>
            <div className="mt-3 space-y-4">
              {PROFILE.skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {group.label}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Languages</h3>
            <div className="mt-3 space-y-2.5">
              {PROFILE.languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span className="font-medium text-slate-700">
                    {language.name}
                  </span>
                  <span className="text-right text-[10px] text-slate-400">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Quick facts
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-sky-500" size={13} /> Kathmandu,
                Nepal
              </li>
              <li className="flex items-center gap-2">
                <FiUser className="text-sky-500" size={13} /> BSc.CSIT student
              </li>
              <li className="flex items-center gap-2">
                <FiTerminal className="text-sky-500" size={13} /> Python-first
                developer
              </li>
            </ul>
          </article>
        </aside>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  return (
    <div className="pb-10">
      <PageHeading
        eyebrow="Projects"
        title="Things I've built, broken, fixed, and shipped."
        lead="A few projects that shaped how I write code. Each one is open on GitHub, so feel free to look around."
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-3 md:grid-cols-2">
          {PROFILE.projects.map((project, index) => (
            <article
              key={project.name}
              className={`flex flex-col rounded-2xl border border-slate-200 border-t-4 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                accentClasses[index % accentClasses.length]
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Project 0{index + 1} · {project.period}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-slate-900">
                    {project.name}
                  </h3>
                </div>
                <FiCode className="mt-1 shrink-0 text-slate-300" size={18} />
              </div>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 transition hover:text-sky-700"
                  >
                    {link.label} <FiArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            More experiments, half-finished ideas, and commits live on GitHub.
          </p>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            <FiGithub size={14} /> Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export function ResumePage({ onOpenResume }) {
  return (
    <div className="pb-10">
      <PageHeading
        eyebrow="Resume"
        title="The one-page version."
        lead="Prefer to read it here? The structured version is below. You can also open or download the original PDF."
      />

      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
        <div className="mb-3 flex flex-wrap gap-2">
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            <FiExternalLink size={14} /> Open PDF
          </a>
          <a
            href={PROFILE.links.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FiDownload size={14} /> Download
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FiFileText size={14} /> Open in viewer
          </button>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <header className="border-b border-slate-200 pb-5">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              {PROFILE.name}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-sky-600">
              {PROFILE.role}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
              <a
                href={PROFILE.links.email}
                className="inline-flex items-center gap-1.5 hover:text-slate-800"
              >
                <FiMail size={12} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.phoneHref}
                className="inline-flex items-center gap-1.5 hover:text-slate-800"
              >
                <FiPhone size={12} /> {PROFILE.phone}
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-800"
              >
                <FiLinkedin size={12} /> LinkedIn
              </a>
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-800"
              >
                <FiGithub size={12} /> GitHub
              </a>
            </div>
          </header>

          <div className="mt-5 grid gap-7 md:grid-cols-[1.55fr_0.75fr]">
            <div className="space-y-6">
              <section>
                <h4 className="border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Summary
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {PROFILE.summary}
                </p>
              </section>

              <section>
                <h4 className="border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Projects
                </h4>
                <div className="mt-2.5 space-y-3.5">
                  {PROFILE.projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-xs font-semibold text-slate-800">
                          {project.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {project.period}
                        </p>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                        {project.description}
                      </p>
                      <p className="mt-1 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-medium text-sky-600 hover:text-sky-700"
                          >
                            {link.label}
                          </a>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Education
                </h4>
                <div className="mt-2">
                  <p className="text-xs font-semibold text-slate-800">
                    {PROFILE.education.degree}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {PROFILE.education.school}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {PROFILE.education.location} · {PROFILE.education.period}
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section>
                <h4 className="border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Skills
                </h4>
                <div className="mt-2.5 space-y-3">
                  {PROFILE.skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[10px] font-semibold text-slate-500">
                        {group.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Languages
                </h4>
                <div className="mt-2.5 space-y-2">
                  {PROFILE.languages.map((language) => (
                    <div key={language.name}>
                      <p className="text-[11px] font-medium text-slate-700">
                        {language.name}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {language.level}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}

export function ContactPage({ copied, onCopyEmail }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const cards = [
    {
      icon: FiMail,
      label: "Email",
      value: PROFILE.email,
      href: PROFILE.links.email,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: PROFILE.phone,
      href: PROFILE.phoneHref,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "rupesh-acharya",
      href: PROFILE.links.linkedin,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "@Newinacode",
      href: PROFILE.links.github,
    },
  ];

  return (
    <div className="pb-10">
      <PageHeading
        eyebrow="Contact"
        title="Let's build something together."
        lead="Whether it's a project, a question, or just a hello — my inbox is open. I usually reply within a day or two."
      />

      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <div className="grid gap-2 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === "LinkedIn" || card.label === "GitHub" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Icon size={15} />
                  </span>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-0.5 truncate text-xs font-medium text-slate-700">
                    {card.value}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-sky-600 opacity-0 transition group-hover:opacity-100">
                    Reach out <FiArrowUpRight size={10} />
                  </p>
                </a>
              );
            })}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <FiMapPin size={15} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Based in
                </p>
                <p className="mt-0.5 text-xs font-medium text-slate-700">
                  {PROFILE.location}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Open to remote work and collaborations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Copy my email
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-700">
                {PROFILE.email}
              </p>
            </div>
            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {copied ? (
                <>
                  <FiCheck size={12} className="text-emerald-600" /> Copied
                </>
              ) : (
                <>
                  <FiCopy size={12} /> Copy
                </>
              )}
            </button>
          </div>

          <a
            href={PROFILE.links.discord}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-xs font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/40"
          >
            <span>Or say hi on Discord</span>
            <FiArrowUpRight className="text-indigo-500" size={15} />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <h3 className="text-sm font-semibold text-slate-900">
            Send a message
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            This opens your email app with everything filled in.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Name
              </span>
              <input
                name="name"
                required
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </label>
            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </label>
          </div>

          <label className="mt-3 block">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me a little about your idea..."
              className="mt-1 w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
            />
          </label>

          <button
            type="submit"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            <FiSend size={13} /> Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export function BraveFooter({ navigate }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-[11px] text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with React,
          Tailwind CSS, and Redux.
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            Contact
          </button>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.resume}
            download
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
