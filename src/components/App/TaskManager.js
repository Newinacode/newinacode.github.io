import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FiActivity,
  FiClock,
  FiCpu,
  FiMonitor,
  FiPlay,
  FiX,
} from "react-icons/fi";
import {
  CloseApplication,
  ToggleApplication,
} from "../../actions/App";
import { APPS } from "../../config/apps";
import Window from "../UI/Window";

const statusStyles = {
  Running: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Background: "bg-sky-50 text-sky-700 ring-sky-100",
  Minimized: "bg-amber-50 text-amber-700 ring-amber-100",
  "Not running": "bg-slate-100 text-slate-500 ring-slate-200",
};

const formatUptime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
};

function TaskManager() {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows);
  const focused = useSelector((state) => state.focused);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const processes = Object.keys(APPS).map((id, index) => {
    const app = APPS[id];
    const appWindow = windows[id];
    let status = "Not running";

    if (appWindow.open && appWindow.minimized) status = "Minimized";
    else if (appWindow.open && focused === id) status = "Running";
    else if (appWindow.open) status = "Background";

    return {
      id,
      app,
      window: appWindow,
      status,
      index,
      memory: appWindow.open ? `${44 + index * 11} MB` : "—",
    };
  });

  const openCount = processes.filter((item) => item.window.open).length;
  const focusedName = focused ? APPS[focused]?.name : "Desktop";

  return (
    <Window
      app="taskmanager"
      title="Task Manager"
      subtitle="RupeshOS process monitor"
      bodyClassName="bg-slate-100"
    >
      <div className="flex h-full min-h-0 flex-col text-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2">
          <div className="flex items-center gap-2">
            <img
              src="/images/taskmanager.png"
              alt=""
              className="h-4 w-4 object-contain"
            />
            <span className="border-b-2 border-sky-500 py-1.5 text-xs font-semibold text-slate-900">
              Processes
            </span>
          </div>
          <span className="text-[10px] text-slate-400">
            {openCount} of {processes.length} windows open
          </span>
        </div>

        <div className="grid shrink-0 grid-cols-3 gap-2 p-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              <FiActivity size={11} /> Running
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900">
              {openCount}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              <FiMonitor size={11} /> Focused
            </div>
            <p className="mt-1 truncate text-sm font-semibold text-slate-900">
              {focusedName}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              <FiClock size={11} /> Uptime
            </div>
            <p className="mt-1 font-mono text-xl font-semibold text-slate-900">
              {formatUptime(seconds)}
            </p>
          </div>
        </div>

        <div className="mx-3 mb-3 flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="no-scrollbar overflow-auto">
            <table className="w-full min-w-[34rem] text-left text-xs">
              <thead className="sticky top-0 z-10 bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-3 py-2 font-semibold">Process</th>
                  <th className="px-3 py-2 font-semibold">Status</th>
                  <th className="hidden px-3 py-2 font-semibold sm:table-cell">
                    Memory
                  </th>
                  <th className="hidden px-3 py-2 font-semibold md:table-cell">
                    Z-Index
                  </th>
                  <th className="px-3 py-2 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processes.map((process) => (
                  <tr
                    key={process.id}
                    className={`transition hover:bg-slate-50 ${
                      focused === process.id ? "bg-sky-50/50" : ""
                    }`}
                  >
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={process.app.icon}
                          alt=""
                          className="h-5 w-5 shrink-0 object-contain"
                        />
                        <span className="font-medium text-slate-700">
                          {process.app.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                          statusStyles[process.status]
                        }`}
                      >
                        {process.status}
                      </span>
                    </td>
                    <td className="hidden px-3 py-2 text-slate-400 sm:table-cell">
                      {process.memory}
                    </td>
                    <td className="hidden px-3 py-2 font-mono text-slate-400 md:table-cell">
                      {process.window.open ? process.window.z : "—"}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => dispatch(ToggleApplication(process.id))}
                          className="inline-flex items-center gap-1 rounded border border-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"
                          title={
                            process.window.open
                              ? process.status === "Minimized"
                                ? "Restore"
                                : "Focus / minimize"
                              : "Launch"
                          }
                        >
                          <FiPlay size={10} />
                          {!process.window.open
                            ? "Launch"
                            : process.status === "Minimized"
                            ? "Restore"
                            : process.status === "Running"
                            ? "Minimize"
                            : "Focus"}
                        </button>
                        <button
                          type="button"
                          disabled={!process.window.open}
                          onClick={() => dispatch(CloseApplication(process.id))}
                          className="inline-flex items-center gap-1 rounded border border-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                          title="End task"
                        >
                          <FiX size={10} />
                          End
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 px-3 py-2 text-[10px] text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <FiCpu size={11} /> RupeshOS 1.0 · React runtime
            </span>
            <span>Ending a task closes its window.</span>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default TaskManager;
