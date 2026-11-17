import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPower,
  FiRefreshCw,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { CloseStartMenu, OpenApplication } from "../../actions/App";
import { APPS, START_MENU_APPS } from "../../config/apps";
import { PROFILE } from "../../config/profile";

const quickLinks = [
  {
    label: "GitHub",
    description: "Code & projects",
    href: PROFILE.links.github,
    icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Let's connect",
    href: PROFILE.links.linkedin,
    icon: FiLinkedin,
    external: true,
  },
  {
    label: "Email",
    description: "Send a message",
    href: PROFILE.links.email,
    icon: FiMail,
  },
  {
    label: "Resume",
    description: "PDF download",
    href: PROFILE.links.resume,
    icon: FiFileText,
    download: true,
  },
];

function Startup() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 768) searchRef.current?.focus();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredApps = START_MENU_APPS.filter((id) => {
    if (!normalizedQuery) return true;
    const app = APPS[id];
    return `${app.name} ${app.description} ${app.keywords}`
      .toLowerCase()
      .includes(normalizedQuery);
  });

  const openApp = (id) => dispatch(OpenApplication(id));

  const restart = () => {
    try {
      sessionStorage.removeItem("ra-power");
    } catch (error) {
      // Storage can be unavailable in private modes; reload anyway.
    }
    window.location.reload();
  };

  const shutdown = () => {
    try {
      sessionStorage.setItem("ra-power", "off");
    } catch (error) {
      // Fall back to a normal reload if storage is blocked.
    }
    window.location.reload();
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(CloseStartMenu());
    }
    if (event.key === "Enter" && filteredApps.length > 0) {
      openApp(filteredApps[0]);
    }
  };

  return (
    <aside
      aria-label="Start menu"
      className="start-menu fixed bottom-[4.5rem] left-2 z-[1001] flex max-h-[min(42rem,78vh)] w-[min(29rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:left-4"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-sky-500/10 via-slate-900/0 to-violet-500/10 px-4 py-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/90 to-violet-500/90 text-base font-black tracking-tight text-white ring-1 ring-white/20">
          RA
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{PROFILE.name}</p>
          <p className="truncate text-xs text-slate-400">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </div>
        <span
          className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]"
          title="Available"
        />
      </div>

      <div className="border-b border-white/10 p-3">
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-sky-400/60 focus-within:bg-white/10">
          <FiSearch className="shrink-0 text-slate-400" size={15} />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search apps and profile..."
            aria-label="Search apps"
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded p-1 text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <FiX size={12} />
            </button>
          ) : null}
        </label>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto p-3">
        <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          {normalizedQuery ? "Search results" : "Pinned"}
        </p>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-3 gap-1.5">
            {filteredApps.map((id) => {
              const app = APPS[id];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => openApp(id)}
                  className="group flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                  title={app.description}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 p-1.5 shadow-sm shadow-black/20 transition group-hover:scale-105">
                    <img
                      src={app.icon}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-slate-200">
                    {app.name}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-white/10 px-4 py-8 text-center">
            <p className="text-sm font-medium text-slate-300">
              No apps found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try “brave”, “resume”, or “terminal”.
            </p>
          </div>
        )}

        {!normalizedQuery ? (
          <>
            <p className="px-1 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Quick links
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    download={link.download || undefined}
                    onClick={() => dispatch(CloseStartMenu())}
                    className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-2.5 py-2.5 transition hover:border-white/10 hover:bg-white/10"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:text-white">
                      <Icon size={15} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium">
                        {link.label}
                      </span>
                      <span className="block truncate text-[10px] text-slate-500">
                        {link.description}
                      </span>
                    </span>
                    {link.external ? (
                      <FiExternalLink
                        className="ml-auto shrink-0 text-slate-600 group-hover:text-slate-300"
                        size={12}
                      />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/50 px-3 py-2.5">
        <p className="pl-1 text-[10px] text-slate-500">
          RupeshOS <span className="text-slate-600">v1.0</span>
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={restart}
            title="Restart"
            aria-label="Restart"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <FiRefreshCw size={14} />
            <span className="hidden sm:inline">Restart</span>
          </button>
          <button
            type="button"
            onClick={shutdown}
            title="Shut down"
            aria-label="Shut down"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-400 transition hover:bg-red-500/20 hover:text-red-300"
          >
            <FiPower size={14} />
            <span className="hidden sm:inline">Shut down</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Startup;
