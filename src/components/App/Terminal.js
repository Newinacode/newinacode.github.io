import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FiArrowUpRight } from "react-icons/fi";
import { CloseApplication, OpenApplication } from "../../actions/App";
import { APPS } from "../../config/apps";
import { PROFILE } from "../../config/profile";
import Window from "../UI/Window";

let entrySequence = 0;
const createEntry = (node, type = "output") => ({
  id: ++entrySequence,
  node,
  type,
});

const COMMANDS = [
  ["help", "show this list"],
  ["about", "who I am"],
  ["skills", "languages & tools"],
  ["projects", "things I have built"],
  ["education", "where I study"],
  ["contact", "how to reach me"],
  ["resume", "open my resume"],
  ["open <app>", "launch an app or game"],
  ["neofetch", "system + profile info"],
  ["ls / cat <file>", "browse the virtual files"],
  ["clear", "clear the terminal"],
  ["exit", "close the terminal"],
];

const FILES = [
  "about.txt",
  "skills.txt",
  "projects.txt",
  "contact.txt",
  "resume.pdf",
];

const COMPLETIONS = [
  "help",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
  "resume",
  "open",
  "neofetch",
  "ls",
  "cat",
  "date",
  "pwd",
  "whoami",
  "echo",
  "clear",
  "exit",
  ...FILES,
];

const Prompt = () => (
  <span className="shrink-0 whitespace-nowrap">
    <span className="text-emerald-400">rupesh</span>
    <span className="text-slate-500">@</span>
    <span className="text-sky-400">rupesh-os</span>
    <span className="text-slate-500">:</span>
    <span className="text-violet-300">~</span>
    <span className="text-slate-300">$</span>
  </span>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-0.5 text-sky-300 underline decoration-sky-500/40 underline-offset-2 transition hover:text-sky-200"
  >
    {children}
    <FiArrowUpRight aria-hidden size={11} />
  </a>
);

const WelcomeBanner = () => (
  <div className="space-y-1">
    <p className="font-semibold text-emerald-300">
      RupeshOS Terminal <span className="text-slate-500">v1.0.0</span>
    </p>
    <p className="text-slate-400">
      Welcome, visitor. This is an interactive terminal — not a screenshot.
    </p>
    <p className="text-slate-500">
      Type <span className="text-sky-300">help</span> to see what you can do.
    </p>
  </div>
);

function Terminal() {
  const dispatch = useDispatch();
  const [entries, setEntries] = useState(() => [
    createEntry(<WelcomeBanner />, "banner"),
  ]);
  const [draft, setDraft] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  const push = (...nodes) => {
    setEntries((current) => [
      ...current,
      ...nodes.map((node) => createEntry(node)),
    ]);
  };

  const runCommand = (raw) => {
    const input = raw.trim();
    if (!input) return;

    const [command, ...args] = input.split(/\s+/);
    const name = command.toLowerCase();
    const arg = args.join(" ");

    setHistory((current) => [...current, input]);
    setHistoryIndex(-1);

    if (name === "clear" || (name === "cls" && !arg)) {
      setEntries([]);
      return;
    }

    const commandEntry = createEntry(
      <span className="text-slate-200">{input}</span>,
      "command"
    );

    if (name === "exit" || name === "logout") {
      dispatch(CloseApplication("terminal"));
      return;
    }

    let output = [];
    const out = (node) => output.push(createEntry(node));

    switch (name) {
      case "help":
        out(
          <div className="space-y-1">
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-0.5">
              {COMMANDS.map(([cmd, description]) => (
                <div key={cmd} className="contents">
                  <span className="text-sky-300">{cmd}</span>
                  <span className="text-slate-400">{description}</span>
                </div>
              ))}
            </div>
            <p className="pt-1 text-slate-500">
              Tip: use Tab to autocomplete and ↑ / ↓ for history.
            </p>
          </div>
        );
        break;

      case "about":
        out(
          <div className="max-w-2xl space-y-1">
            <p className="text-emerald-300">{PROFILE.name}</p>
            <p className="text-slate-300">
              {PROFILE.role} · {PROFILE.location}
            </p>
            <p className="text-slate-400">{PROFILE.summary}</p>
          </div>
        );
        break;

      case "whoami":
        out(<p className="text-slate-300">rupesh — Python developer</p>);
        break;

      case "skills":
        out(
          <div className="space-y-1">
            {PROFILE.skillGroups.map((group) => (
              <p key={group.label}>
                <span className="text-sky-300">{group.label}: </span>
                <span className="text-slate-300">
                  {group.items.join(" · ")}
                </span>
              </p>
            ))}
          </div>
        );
        break;

      case "projects":
        out(
          <div className="space-y-2">
            {PROFILE.projects.map((project) => (
              <div key={project.name}>
                <p>
                  <span className="text-emerald-300">{project.name}</span>
                  <span className="text-slate-500"> — {project.period}</span>
                </p>
                <p className="text-slate-400">{project.description}</p>
                <p className="flex flex-wrap gap-x-3">
                  {project.links.map((link) => (
                    <ExternalLink key={link.href} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        out(
          <div className="space-y-0.5">
            <p className="text-slate-200">{PROFILE.education.degree}</p>
            <p className="text-slate-400">{PROFILE.education.school}</p>
            <p className="text-slate-500">
              {PROFILE.education.location} · {PROFILE.education.period}
            </p>
          </div>
        );
        break;

      case "contact":
        out(
          <div className="space-y-1">
            <p>
              <span className="text-sky-300">email </span>
              <a
                href={PROFILE.links.email}
                className="text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-white"
              >
                {PROFILE.email}
              </a>
            </p>
            <p>
              <span className="text-sky-300">phone </span>
              <a
                href={PROFILE.phoneHref}
                className="text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-white"
              >
                {PROFILE.phone}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-3">
              <ExternalLink href={PROFILE.links.github}>GitHub</ExternalLink>
              <ExternalLink href={PROFILE.links.linkedin}>
                LinkedIn
              </ExternalLink>
              <ExternalLink href={PROFILE.links.discord}>Discord</ExternalLink>
            </p>
          </div>
        );
        break;

      case "resume":
        dispatch(OpenApplication("portfolio"));
        out(
          <p className="text-emerald-300">
            Opening resume… use the download button to save the PDF.
          </p>
        );
        break;

      case "open": {
        const aliases = {
          resume: "portfolio",
          cv: "portfolio",
          portfolio: "portfolio",
          browser: "brave",
          console: "terminal",
          shell: "terminal",
          tasks: "taskmanager",
          task: "taskmanager",
        };
        const requested = arg.toLowerCase();
        const appId = aliases[requested] || requested;
        const app = APPS[appId];
        if (!app) {
          out(
            <p className="text-amber-300">
              Unknown app “{arg || "?"}”. Try:{" "}
              <span className="text-sky-300">
                {Object.keys(APPS).join(", ")}
              </span>
            </p>
          );
          break;
        }
        dispatch(OpenApplication(appId));
        out(
          <p className="text-emerald-300">
            Launching {app.name}…
          </p>
        );
        break;
      }

      case "ls":
        if (arg === "apps") {
          out(
            <p className="text-slate-300">
              {Object.values(APPS)
                .map((app) => app.name)
                .join("  ")}
            </p>
          );
        } else {
          out(
            <p className="text-sky-300">
              {FILES.join("  ")}{" "}
              <span className="text-violet-300">apps/</span>
            </p>
          );
        }
        break;

      case "cat": {
        const file = arg.toLowerCase();
        if (file === "about.txt") {
          out(<p className="max-w-2xl text-slate-300">{PROFILE.summary}</p>);
        } else if (file === "skills.txt") {
          out(
            <div className="space-y-0.5">
              {PROFILE.skillGroups.map((group) => (
                <p key={group.label}>
                  <span className="text-sky-300">{group.label}: </span>
                  {group.items.join(", ")}
                </p>
              ))}
            </div>
          );
        } else if (file === "projects.txt") {
          out(
            <div className="space-y-0.5">
              {PROFILE.projects.map((project) => (
                <p key={project.name} className="text-slate-300">
                  <span className="text-emerald-300">{project.name}</span> —{" "}
                  {project.description}
                </p>
              ))}
            </div>
          );
        } else if (file === "contact.txt") {
          out(
            <p className="text-slate-300">
              {PROFILE.email} · {PROFILE.phone} ·{" "}
              <ExternalLink href={PROFILE.links.github}>GitHub</ExternalLink>{" "}
              ·{" "}
              <ExternalLink href={PROFILE.links.linkedin}>
                LinkedIn
              </ExternalLink>
            </p>
          );
        } else if (file === "resume.pdf") {
          out(
            <p className="text-amber-300">
              resume.pdf is binary. Run{" "}
              <span className="text-sky-300">resume</span> to open the viewer.
            </p>
          );
        } else {
          out(
            <p className="text-red-400">
              cat: {arg || "?"}: No such file. Try{" "}
              <span className="text-sky-300">ls</span>.
            </p>
          );
        }
        break;
      }

      case "date":
        out(<p className="text-slate-300">{new Date().toString()}</p>);
        break;

      case "pwd":
        out(<p className="text-slate-300">/home/rupesh</p>);
        break;

      case "echo":
        out(<p className="text-slate-300">{arg || ""}</p>);
        break;

      case "neofetch":
        out(
          <div className="flex flex-col gap-4 py-1 sm:flex-row sm:items-center sm:gap-6">
            <pre className="select-none text-[10px] leading-[1.05] text-sky-400">
{`   ██████╗
   ██╔══██╗
   ██████╔╝
   ██╔══██╗
   ██║  ██║
   ╚═╝  ╚═╝`}
            </pre>
            <div className="space-y-0.5 text-[12px]">
              <p>
                <span className="font-semibold text-sky-300">rupesh</span>
                <span className="text-slate-500">@</span>
                <span className="font-semibold text-sky-300">
                  rupesh-os
                </span>
              </p>
              <p className="text-slate-600">-------------------</p>
              <p>
                <span className="text-sky-300">OS</span>: RupeshOS 1.0
                (React)
              </p>
              <p>
                <span className="text-sky-300">Host</span>: Kathmandu, Nepal
              </p>
              <p>
                <span className="text-sky-300">Role</span>: Python Developer
              </p>
              <p>
                <span className="text-sky-300">Shell</span>: rupesh-sh 1.0
              </p>
              <p>
                <span className="text-sky-300">Apps</span>: Brave, Terminal,
                Task Manager
              </p>
              <p>
                <span className="text-sky-300">Uptime</span>: always shipping
              </p>
              <p>
                <span className="text-sky-300">Contact</span>: {PROFILE.email}
              </p>
              <div className="flex gap-1 pt-1">
                {[
                  "#0b0f14",
                  "#38bdf8",
                  "#34d399",
                  "#a78bfa",
                  "#f472b6",
                  "#e2e8f0",
                ].map((color) => (
                  <span
                    key={color}
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
        break;

      case "banner":
        out(
          <pre className="text-[10px] leading-tight text-sky-300">
{` ____  _   _ ____  _____ ____  _   _
|  _ \\| | | |  _ \\| ____/ ___|| | | |
| |_) | | | | |_) |  _| \\___ \\| |_| |
|  _ <| |_| |  __/| |___ ___) |  _  |
|_| \\_\\\\___/|_|   |_____|____/|_| |_|`}
          </pre>
        );
        break;

      case "coffee":
        out(<p className="text-amber-300">Brewing… ☕ done. Now back to code.</p>);
        break;

      case "sudo":
        out(
          <p className="text-amber-300">
            Nice try — you already have full access to this portfolio.
          </p>
        );
        break;

      case "rm":
        out(
          <p className="text-red-400">
            rm is disabled. This portfolio is protected by good vibes.
          </p>
        );
        break;

      default:
        out(
          <div className="space-y-0.5">
            <p className="text-red-400">
              {name}: command not found
            </p>
            <p className="text-slate-500">
              Type <span className="text-sky-300">help</span> for available
              commands.
            </p>
          </div>
        );
    }

    setEntries((current) => [...current, commandEntry, ...output]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = draft;
    setDraft("");
    if (value.trim()) runCommand(value);
  };

  const completeDraft = () => {
    const value = draft;

    if (value === "open") {
      setDraft("open ");
      return;
    }

    if (value === "cat") {
      setDraft("cat ");
      return;
    }

    if (value.startsWith("open ")) {
      const prefix = value.slice(5).toLowerCase();
      const candidates = Object.keys(APPS);
      const matches = candidates.filter((item) => item.startsWith(prefix));
      if (matches.length === 1) {
        setDraft(`open ${matches[0]}`);
      } else if (matches.length > 1) {
        push(
          <p className="text-slate-400">{matches.join("  ")}</p>
        );
      }
      return;
    }

    if (value.startsWith("cat ")) {
      const prefix = value.slice(4).toLowerCase();
      const matches = FILES.filter((item) => item.startsWith(prefix));
      if (matches.length === 1) {
        setDraft(`cat ${matches[0]}`);
      } else if (matches.length > 1) {
        push(<p className="text-slate-400">{matches.join("  ")}</p>);
      }
      return;
    }

    const matches = COMPLETIONS.filter(
      (item) => item.startsWith(value.toLowerCase()) && item !== value
    );

    if (matches.length === 1) {
      setDraft(matches[0] + (matches[0] === "ls" ? "" : " "));
    } else if (matches.length > 1) {
      push(<p className="text-slate-400">{matches.join("  ")}</p>);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      completeDraft();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const next =
        historyIndex === -1
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);
      setHistoryIndex(next);
      setDraft(history[next]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setDraft("");
      } else {
        setHistoryIndex(next);
        setDraft(history[next]);
      }
      return;
    }

    if (event.key === "l" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      setEntries([]);
      return;
    }

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();
      setEntries((current) => [
        ...current,
        createEntry(
          <div className="flex gap-2">
            <Prompt />
            <span>
              {draft}
              <span className="text-slate-500">^C</span>
            </span>
          </div>
        ),
      ]);
      setDraft("");
    }
  };

  return (
    <Window
      app="terminal"
      dark
      title="Terminal"
      subtitle="rupesh@rupesh-os — interactive shell"
    >
      <div
        className="flex h-full flex-col bg-[#080c12] font-mono text-[12px] leading-relaxed text-slate-300 sm:text-[13px]"
        onClick={(event) => {
          if (!event.target.closest("a")) inputRef.current?.focus();
        }}
      >
        <div
          ref={scrollRef}
          className="terminal-scroll min-h-0 flex-1 space-y-2 overflow-y-auto px-3 py-3 sm:px-5 sm:py-4"
        >
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`break-words ${
                entry.type === "command" ? "flex gap-2" : ""
              }`}
            >
              {entry.type === "command" ? <Prompt /> : null}
              <div className="min-w-0 flex-1">{entry.node}</div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Prompt />
            <input
              ref={inputRef}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input min-w-0 flex-1 border-none bg-transparent p-0 text-slate-100 caret-emerald-300 focus:outline-none focus:ring-0"
            />
          </form>
        </div>

        <div className="hidden items-center justify-between border-t border-white/5 bg-white/[0.02] px-3 py-1.5 text-[10px] text-slate-600 sm:flex">
          <span>Type “help” to get started</span>
          <span className="flex gap-3">
            <span>Tab autocomplete</span>
            <span>↑↓ history</span>
            <span>Ctrl+L clear</span>
          </span>
        </div>
      </div>
    </Window>
  );
}

export default Terminal;
