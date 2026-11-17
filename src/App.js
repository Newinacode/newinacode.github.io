import { useState } from "react";
import { FiPower } from "react-icons/fi";
import "./App.css";
import ToolBar from "./components/UI/ToolBar";
import Background from "./components/UI/Background";
import { PROFILE } from "./config/profile";

function readPowerState() {
  try {
    return sessionStorage.getItem("ra-power") === "off";
  } catch (error) {
    return false;
  }
}

function App() {
  const [poweredOff, setPoweredOff] = useState(readPowerState);

  const powerOn = () => {
    try {
      sessionStorage.removeItem("ra-power");
    } catch (error) {
      // Ignore storage errors and simply reload.
    }
    setPoweredOff(false);
    window.location.reload();
  };

  if (poweredOff) {
    return (
      <div className="flex h-[100dvh] flex-col items-center justify-center bg-black px-6 text-center text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/80 to-violet-500/80 text-2xl font-black tracking-tight text-white opacity-80 shadow-2xl shadow-sky-500/10">
          RA
        </div>
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
          RupeshOS
        </p>
        <h1 className="mt-2 text-xl font-semibold text-slate-200">
          System powered off
        </h1>
        <p className="mt-2 max-w-sm text-xs text-slate-500">
          It is now safe to close this tab. Or, you know, turn it back on and
          explore a little more.
        </p>
        <button
          type="button"
          onClick={powerOn}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          <FiPower size={15} /> Power on
        </button>
        <p className="mt-10 text-[10px] text-slate-700">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-slate-900">
      <Background />
      <ToolBar />
    </div>
  );
}

export default App;
