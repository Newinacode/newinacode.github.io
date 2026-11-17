import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";
import { PROFILE } from "../../config/profile";
import Window from "../UI/Window";

function Discord() {
  return (
    <Window
      app="discord"
      dark
      title="Discord"
      subtitle="Community server"
      bodyClassName="bg-[#313338]"
    >
      <div className="relative flex h-full min-h-0 items-center justify-center overflow-hidden">
        <img
          src="/images/discordbg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-950/70 to-slate-950/80" />

        <div className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-[#1e1f22]/90 p-5 text-center text-white shadow-2xl backdrop-blur-md sm:p-7">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5865f2] shadow-lg shadow-indigo-900/40">
            <img
              src="/images/discord.png"
              alt="Discord"
              className="h-9 w-9 object-contain"
            />
          </div>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-300">
            Community
          </p>
          <h2 className="mt-1 text-xl font-semibold">Hang out with us</h2>
          <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-slate-400">
            Dev talk, side projects, and the occasional late-night gaming
            session. Everyone is welcome — come say hi.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <FiUsers size={11} /> Friendly community
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <FiMessageCircle size={11} /> Dev + gaming
            </span>
          </div>

          <a
            href={PROFILE.links.discord}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865f2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4752c4]"
          >
            Join the Discord <FiArrowUpRight size={15} />
          </a>

          <div className="mt-4 flex items-center justify-center gap-4 border-t border-white/10 pt-3 text-[10px] text-slate-500">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-slate-300"
            >
              <FiGithub size={12} /> GitHub
            </a>
            <a
              href={PROFILE.links.email}
              className="inline-flex items-center gap-1.5 transition hover:text-slate-300"
            >
              <FiMail size={12} /> Email
            </a>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Discord;
