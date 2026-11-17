import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiCrosshair,
  FiExternalLink,
} from "react-icons/fi";
import { PROFILE } from "../../config/profile";
import Window from "../UI/Window";

const EPIC_NAME = "anka_lunaticnoob";

function Fortnite() {
  const [copied, setCopied] = useState(false);

  const copyName = async () => {
    try {
      await navigator.clipboard.writeText(EPIC_NAME);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.prompt("Copy my Epic Games name:", EPIC_NAME);
    }
  };

  return (
    <Window
      app="fortnite"
      dark
      title="Fortnite"
      subtitle="Epic Games"
      bodyClassName="bg-[#0b1026]"
    >
      <div className="relative flex h-full min-h-0 flex-col overflow-hidden bg-gradient-to-br from-[#1a103d] via-[#241563] to-[#0a2a60] text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fortnite/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        <span className="pointer-events-none absolute -right-6 top-10 rotate-12 text-[7rem] font-black italic leading-none text-white/[0.03] sm:text-[11rem]">
          GG
        </span>

        <div className="relative flex min-h-0 flex-1 flex-col justify-center px-5 py-6 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <img
                src="/images/fn.png"
                alt=""
                className="h-7 w-7 object-contain"
              />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                Battle Royale
              </p>
              <h2 className="text-2xl font-black italic tracking-tight sm:text-3xl">
                FORTNITE
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
            When the deploy is green and the code is clean, you'll probably
            find me dropping in for a match. GGs only.
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Epic Games
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-white">
                  {EPIC_NAME}
                </p>
              </div>
              <button
                type="button"
                onClick={copyName}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <FiCheck size={12} className="text-emerald-300" /> Copied
                  </>
                ) : (
                  <>
                    <FiCopy size={12} /> Copy name
                  </>
                )}
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Solo", "Duos", "Squads", "Zero Build"].map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={PROFILE.links.fortniteTracker}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-fortnite px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sky-400"
            >
              <FiCrosshair size={13} /> Fortnite Tracker
            </a>
            <a
              href="https://www.epicgames.com/fortnite/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
            >
              <FiExternalLink size={13} /> Epic Games
            </a>
            <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
              See you in the lobby <FiArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Fortnite;
