import { useDispatch } from "react-redux";
import { FiArrowRight, FiExternalLink, FiPlay } from "react-icons/fi";
import { OpenApplication } from "../../actions/App";
import { PROFILE } from "../../config/profile";
import Window from "../UI/Window";

function ValorantTab() {
  const dispatch = useDispatch();

  return (
    <Window
      app="valorant"
      dark
      title="Valorant"
      subtitle="Riot Games"
      bodyClassName="bg-[#0f1923]"
    >
      <div className="relative h-full min-h-0 overflow-hidden bg-[#0f1923] text-white">
        <img
          src="/images/valorant/sage2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923] via-[#0f1923]/85 to-[#0f1923]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-transparent to-transparent" />

        <div className="relative flex h-full max-w-lg flex-col justify-center px-5 py-6 sm:px-9">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/valo2.png"
              alt="Valorant"
              className="h-9 w-9 object-contain"
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-valored">
              5v5 tactical shooter
            </p>
          </div>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            VALORANT
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
            When I'm not writing code, I'm probably holding a site. A little
            competitive FPS is my favourite way to reset after a long build.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={PROFILE.links.valorant}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-valored px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#ff5b67]"
            >
              <FiPlay size={13} /> Play Valorant
            </a>
            <button
              type="button"
              onClick={() => dispatch(OpenApplication("brave"))}
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Back to portfolio <FiArrowRight size={13} />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-500">
            <FiExternalLink size={11} />
            <a
              href={PROFILE.links.valorant}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-2 transition hover:text-slate-300"
            >
              playvalorant.com
            </a>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default ValorantTab;
