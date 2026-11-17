import { useDispatch } from "react-redux";
import {
  FiDownload,
  FiExternalLink,
  FiMonitor,
  FiFileText,
} from "react-icons/fi";
import { OpenApplication } from "../../actions/App";
import { PROFILE } from "../../config/profile";
import Window from "../UI/Window";

function Portfolio() {
  const dispatch = useDispatch();
  const pdfSource = `${PROFILE.links.resume}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`;

  return (
    <Window
      app="portfolio"
      title="Resume"
      subtitle="rupeshresume.pdf"
      bodyClassName="bg-slate-200"
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-50 text-red-500 ring-1 ring-red-100">
              <FiFileText size={14} />
            </span>
            <span className="truncate text-xs font-semibold text-slate-700">
              rupeshresume.pdf
            </span>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              PDF
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => dispatch(OpenApplication("brave"))}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50"
              title="Open the online portfolio"
            >
              <FiMonitor size={12} /> Online version
            </button>
            <a
              href={PROFILE.links.resume}
              download
              className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-slate-800"
            >
              <FiDownload size={12} /> Download
            </a>
            <a
              href={PROFILE.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50"
              title="Open the PDF in a new tab"
            >
              <FiExternalLink size={12} />
              <span className="hidden sm:inline">New tab</span>
            </a>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-slate-300/70 p-2 sm:p-4">
          <object
            data={pdfSource}
            type="application/pdf"
            className="h-full min-h-[22rem] w-full rounded-lg bg-white shadow-xl"
            aria-label="Rupesh Acharya resume PDF"
          >
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-3 rounded-lg bg-white p-6 text-center">
              <FiFileText size={32} className="text-slate-300" />
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Your browser can't preview this PDF here.
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  You can still download it or open it in a new tab.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={PROFILE.links.resume}
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  <FiDownload size={13} /> Download
                </a>
                <a
                  href={PROFILE.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <FiExternalLink size={13} /> New tab
                </a>
              </div>
            </div>
          </object>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-white px-3 py-1.5 text-[10px] text-slate-400">
          <span>Rupesh Acharya · Python Developer</span>
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-500 hover:text-slate-800"
          >
            Open original ↗
          </a>
        </div>
      </div>
    </Window>
  );
}

export default Portfolio;
