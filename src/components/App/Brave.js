import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLock,
  FiRefreshCw,
  FiTerminal,
} from "react-icons/fi";
import { OpenApplication } from "../../actions/App";
import { NAV_PAGES, PROFILE } from "../../config/profile";
import Window from "../UI/Window";
import {
  AboutPage,
  BraveFooter,
  ContactPage,
  HomePage,
  ProjectsPage,
  ResumePage,
} from "./BravePages";

const BrowserButton = ({ label, onClick, disabled = false, children }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    onClick={onClick}
    disabled={disabled}
    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-200 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent"
  >
    {children}
  </button>
);

function Brave() {
  const dispatch = useDispatch();
  const [history, setHistory] = useState(["home"]);
  const [position, setPosition] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);
  const page = history[position];

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    if (!refreshing) return undefined;
    const timer = setTimeout(() => setRefreshing(false), 650);
    return () => clearTimeout(timer);
  }, [refreshing]);

  const navigate = (nextPage) => {
    if (nextPage === page) return;
    setHistory((current) => [
      ...current.slice(0, position + 1),
      nextPage,
    ]);
    setPosition((current) => current + 1);
  };

  const goBack = () => setPosition((current) => Math.max(current - 1, 0));
  const goForward = () =>
    setPosition((current) => Math.min(current + 1, history.length - 1));

  const reload = () => {
    setRefreshing(true);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = PROFILE.links.email;
    }
  };

  return (
    <Window
      app="brave"
      title="Brave"
      subtitle="newinacode.github.io"
      bodyClassName="bg-white"
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex h-11 shrink-0 items-center gap-1 border-b border-slate-200 bg-slate-100 px-2 sm:gap-1.5 sm:px-3">
          <div className="flex shrink-0 items-center gap-0.5">
            <BrowserButton
              label="Back"
              onClick={goBack}
              disabled={position === 0}
            >
              <FiArrowLeft size={15} />
            </BrowserButton>
            <BrowserButton
              label="Forward"
              onClick={goForward}
              disabled={position >= history.length - 1}
            >
              <FiArrowRight size={15} />
            </BrowserButton>
            <BrowserButton label="Reload" onClick={reload}>
              <FiRefreshCw
                size={14}
                className={refreshing ? "animate-spin" : ""}
              />
            </BrowserButton>
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 shadow-inner">
            <FiLock size={11} className="shrink-0 text-emerald-600" />
            <span className="truncate text-[11px] text-slate-600">
              newinacode.github.io
              <span className="text-slate-400">
                {page === "home" ? "/" : `/${page}`}
              </span>
            </span>
            <span className="ml-auto hidden shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-400 sm:block">
              RupeshOS
            </span>
          </div>

          <BrowserButton
            label="Open GitHub"
            onClick={() =>
              window.open(PROFILE.links.github, "_blank", "noreferrer")
            }
          >
            <FiGithub size={14} />
          </BrowserButton>
          <BrowserButton label="Contact" onClick={() => navigate("contact")}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
              RA
            </span>
          </BrowserButton>
        </div>

        <div className="flex shrink-0 items-center gap-1 border-b border-slate-200 bg-white px-2 py-1.5 sm:gap-2 sm:px-4">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="flex shrink-0 items-center gap-2 rounded-lg px-1 py-1 transition hover:bg-slate-100"
            title="Home"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-violet-500 text-[9px] font-black text-white ring-1 ring-white/20">
              RA
            </span>
            <span className="hidden text-xs font-semibold text-slate-800 xl:block">
              {PROFILE.name}
            </span>
          </button>

          <nav
            aria-label="Portfolio pages"
            className="no-scrollbar flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"
          >
            {NAV_PAGES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                aria-current={item.id === page ? "page" : undefined}
                className={`shrink-0 rounded-md px-2.5 py-1.5 text-[11px] font-medium transition sm:px-3 ${
                  item.id === page
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={PROFILE.links.resume}
            download
            className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 sm:inline-flex sm:px-3"
          >
            <FiDownload size={12} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            type="button"
            onClick={() => dispatch(OpenApplication("terminal"))}
            title="Open terminal"
            aria-label="Open terminal"
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
          >
            <FiTerminal size={15} />
          </button>
          <button
            type="button"
            onClick={() => dispatch(OpenApplication("taskmanager"))}
            title="Open Task Manager"
            aria-label="Open Task Manager"
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 md:flex"
          >
            <FiActivity size={15} />
          </button>
        </div>

        <main
          ref={contentRef}
          className="min-h-0 flex-1 overflow-y-auto bg-slate-50"
        >
          <div key={page} className="page-enter">
            {page === "home" ? <HomePage navigate={navigate} /> : null}
            {page === "about" ? <AboutPage /> : null}
            {page === "projects" ? <ProjectsPage /> : null}
            {page === "resume" ? (
              <ResumePage
                onOpenResume={() => dispatch(OpenApplication("portfolio"))}
              />
            ) : null}
            {page === "contact" ? (
              <ContactPage copied={copied} onCopyEmail={copyEmail} />
            ) : null}
            <BraveFooter navigate={navigate} />
          </div>
        </main>
      </div>
    </Window>
  );
}

export default Brave;
