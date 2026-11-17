import { useDispatch, useSelector } from "react-redux";
import {
  CloseStartMenu,
  OpenApplication,
} from "../../actions/App";
import { APPS, DESKTOP_APPS } from "../../config/apps";
import { PROFILE } from "../../config/profile";
import Brave from "../App/Brave";
import Discord from "../App/Discord";
import Fortnite from "../App/Fortnite";
import Portfolio from "../App/Portfolio";
import TaskManager from "../App/TaskManager";
import Terminal from "../App/Terminal";
import ValorantTab from "../App/ValorantTab";
import Startup from "./Startup";

function Background() {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows);
  const startMenu = useSelector((state) => state.startMenu);
  const desktopIsEmpty = !Object.values(windows).some(
    (appWindow) => appWindow.open
  );

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-black"
      onClick={() => {
        if (startMenu) dispatch(CloseStartMenu());
      }}
    >
      <img
        src="/images/back3.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.38)_100%)]" />

      {/* Desktop shortcuts */}
      <div className="absolute left-2 top-3 z-10 hidden flex-col gap-0.5 sm:flex">
        {DESKTOP_APPS.map((id) => {
          const app = APPS[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => dispatch(OpenApplication(id))}
              className="group flex w-24 flex-col items-center gap-1 rounded-md border border-transparent p-2 transition hover:border-white/10 hover:bg-white/10 focus-visible:border-white/30 focus-visible:bg-white/10 focus-visible:outline-none"
              title={`Open ${app.name}`}
            >
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white/90 p-1.5 shadow-sm shadow-black/30">
                <img
                  src={app.icon}
                  alt=""
                  className="h-full w-full object-contain drop-shadow-none"
                />
              </span>
              <span className="max-w-full truncate text-[10px] font-medium text-white/90 drop-shadow">
                {app.name}
              </span>
            </button>
          );
        })}

        <a
          href={PROFILE.links.github}
          target="_blank"
          rel="noreferrer"
          className="group flex w-24 flex-col items-center gap-1 rounded-md border border-transparent p-2 transition hover:border-white/10 hover:bg-white/10"
          title="GitHub"
        >
          <img
            src="/images/github.png"
            alt=""
            className="h-9 w-9 rounded-lg bg-white/90 p-1.5 object-contain shadow-sm shadow-black/30 transition group-hover:scale-105"
          />
          <span className="max-w-full truncate text-[10px] font-medium text-white/90 drop-shadow">
            GitHub
          </span>
        </a>
      </div>

      {/* Welcome card */}
      {desktopIsEmpty ? (
        <div className="absolute bottom-20 left-3 z-10 w-[min(21rem,calc(100vw-1.5rem))] rounded-2xl border border-white/10 bg-black/40 p-4 text-white shadow-2xl shadow-black/40 backdrop-blur-md sm:left-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-300/90">
            Portfolio · {new Date().getFullYear()}
          </p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-0.5 text-sm text-slate-300">
            {PROFILE.role} · {PROFILE.location}
          </p>
          <p className="mt-2 hidden text-xs leading-relaxed text-slate-400 sm:block">
            Welcome to my desktop. Open an app, browse my work, or say hello
            in the terminal.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => dispatch(OpenApplication("brave"))}
              className="rounded-lg bg-sky-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Explore portfolio
            </button>
            <button
              type="button"
              onClick={() => dispatch(OpenApplication("terminal"))}
              className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/10"
            >
              Open terminal
            </button>
          </div>
        </div>
      ) : null}

      {windows.portfolio.open ? <Portfolio /> : null}
      {windows.brave.open ? <Brave /> : null}
      {windows.valorant.open ? <ValorantTab /> : null}
      {windows.terminal.open ? <Terminal /> : null}
      {windows.fortnite.open ? <Fortnite /> : null}
      {windows.discord.open ? <Discord /> : null}
      {windows.taskmanager.open ? <TaskManager /> : null}

      {startMenu ? <Startup /> : null}
    </div>
  );
}

export default Background;
