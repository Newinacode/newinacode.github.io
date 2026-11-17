import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FiMaximize2,
  FiMinimize2,
  FiMinus,
  FiX,
} from "react-icons/fi";
import {
  CloseApplication,
  FocusApplication,
  MinimizeApplication,
} from "../../actions/App";
import { APPS, WINDOW_SIZES } from "../../config/apps";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function Window({
  app,
  children,
  title,
  subtitle,
  dark = false,
  bodyClassName = "",
  className = "",
}) {
  const dispatch = useDispatch();
  const meta = APPS[app];
  const windowState = useSelector((state) => state.windows[app]);
  const focusedApp = useSelector((state) => state.focused);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [maximized, setMaximized] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    return () => {
      document.body.style.userSelect = "";
    };
  }, []);

  if (!windowState || !windowState.open) return null;

  const isFocused = focusedApp === app;

  const focus = () => {
    if (!isFocused) dispatch(FocusApplication(app));
  };

  const startDrag = (event) => {
    if (maximized || event.button !== 0) return;
    if (event.target.closest("button, a, input, textarea, select")) return;
    if (window.innerWidth < 768) return;

    event.preventDefault();
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    document.body.style.userSelect = "none";
    focus();
  };

  const onDrag = (event) => {
    if (!dragRef.current) return;

    const { startX, startY, originX, originY } = dragRef.current;
    const nextX = clamp(
      originX + event.clientX - startX,
      -window.innerWidth * 0.35,
      window.innerWidth * 0.35
    );
    const nextY = clamp(
      originY + event.clientY - startY,
      -window.innerHeight * 0.12,
      window.innerHeight * 0.3
    );

    setOffset({ x: nextX, y: nextY });
  };

  const endDrag = (event) => {
    if (!dragRef.current) return;
    dragRef.current = null;
    setDragging(false);
    document.body.style.userSelect = "";
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      role="dialog"
      aria-label={title || meta.title}
      className={`window-panel ${WINDOW_SIZES[app] || "window-md"} ${
        maximized ? "window-maximized" : ""
      } ${windowState.minimized ? "hidden" : ""} ${
        isFocused ? "window-focused" : ""
      } ${className}`}
      style={{
        zIndex: windowState.z,
        "--drag-x": `${offset.x}px`,
        "--drag-y": `${offset.y}px`,
      }}
      onPointerDownCapture={focus}
    >
      <header
        className={`window-titlebar ${dark ? "window-titlebar-dark" : ""} ${
          dragging ? "cursor-grabbing" : ""
        }`}
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={() => setMaximized((value) => !value)}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center ${
              dark ? "rounded-sm bg-white/90 p-0.5" : ""
            }`}
          >
            <img
              src={meta.icon}
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold leading-tight">
              {title || meta.title}
            </p>
            {subtitle ? (
              <p
                className={`truncate text-[10px] leading-tight ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="window-controls">
          <button
            type="button"
            aria-label={`Minimize ${meta.name}`}
            title="Minimize"
            className="window-control"
            onClick={() => dispatch(MinimizeApplication(app))}
          >
            <FiMinus />
          </button>
          <button
            type="button"
            aria-label={maximized ? "Restore window" : "Maximize window"}
            title={maximized ? "Restore" : "Maximize"}
            className="window-control hidden sm:flex"
            onClick={() => setMaximized((value) => !value)}
          >
            {maximized ? <FiMinimize2 /> : <FiMaximize2 />}
          </button>
          <button
            type="button"
            aria-label={`Close ${meta.name}`}
            title="Close"
            className="window-control window-control-close"
            onClick={() => dispatch(CloseApplication(app))}
          >
            <FiX />
          </button>
        </div>
      </header>

      <div className={`flex min-h-0 flex-1 flex-col ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}

export default Window;
