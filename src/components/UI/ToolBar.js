import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLinux } from "react-icons/fc";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ToggleApplication, ToggleStartMenu, OpenApplication } from "../../actions/App";
import { APPS, TASKBAR_APPS } from "../../config/apps";
import { PROFILE } from "../../config/profile";

const formatTime = (date) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(date);

function ToolBar() {
  const [now, setNow] = useState(() => new Date());
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows);
  const focused = useSelector((state) => state.focused);
  const startMenu = useSelector((state) => state.startMenu);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav
      aria-label="Taskbar"
      className="fixed inset-x-0 bottom-0 z-[1000] flex h-16 items-center gap-1 border-t border-white/10 bg-slate-950/80 px-1.5 backdrop-blur-2xl sm:gap-2 sm:px-3"
    >
      <button
        type="button"
        aria-label="Open start menu"
        aria-expanded={startMenu}
        title="Start"
        onClick={() => dispatch(ToggleStartMenu())}
        className={`group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition sm:w-14 ${
          startMenu ? "bg-white/20" : "hover:bg-white/10"
        }`}
      >
        <FcLinux
          size={30}
          className="transition duration-200 group-hover:-translate-y-0.5"
        />
      </button>

      <div className="no-scrollbar flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:gap-1">
        {TASKBAR_APPS.map((id) => {
          const app = APPS[id];
          const appWindow = windows[id];
          if (!appWindow) return null;

          const isActive = focused === id && appWindow.open;
          const isOpen = appWindow.open;

          return (
            <button
              key={id}
              type="button"
              title={`${app.name}${appWindow.minimized ? " (minimized)" : ""}`}
              aria-label={app.name}
              aria-pressed={isOpen}
              onClick={() => dispatch(ToggleApplication(id))}
              className={`relative flex h-12 w-10 shrink-0 items-center justify-center rounded-lg transition sm:w-14 ${
                isActive
                  ? "bg-white/20"
                  : "hover:bg-white/10 active:bg-white/20"
              }`}
            >
              <img
                src={app.icon}
                alt=""
                className={`h-8 w-8 rounded-lg bg-white/90 p-1 object-contain shadow-sm shadow-black/30 transition sm:h-9 sm:w-9 ${
                  isOpen && appWindow.minimized ? "opacity-50" : "opacity-100"
                } ${isActive ? "-translate-y-0.5" : ""}`}
              />
              <span
                className={`absolute bottom-1 h-0.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "w-5 bg-sky-300"
                    : isOpen
                    ? "w-2.5 bg-slate-400"
                    : "w-0 bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
        <div className="hidden items-center lg:flex">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-11 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiLinkedin size={17} />
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-11 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiGithub size={17} />
          </a>
        </div>

        <button
          type="button"
          title="Open Task Manager"
          onClick={() => dispatch(OpenApplication("taskmanager"))}
          className="flex h-12 flex-col items-end justify-center rounded-lg px-2 text-right leading-tight text-slate-200 transition hover:bg-white/10"
        >
          <span className="text-[11px] font-medium sm:text-xs">
            {formatTime(now)}
          </span>
          <span className="hidden text-[10px] text-slate-400 sm:block">
            {formatDate(now)}
          </span>
          <span className="sr-only">Open Task Manager</span>
        </button>
      </div>
    </nav>
  );
}

export default ToolBar;
