import { APPS } from "../config/apps";

const createWindow = (z = 10) => ({
  open: false,
  minimized: false,
  z,
});

const initialState = {
  windows: Object.keys(APPS).reduce((windows, id, index) => {
    windows[id] = createWindow(10 + index);
    return windows;
  }, {}),
  focused: null,
  nextZ: 30,
  startMenu: false,
};

const focusWindow = (state, id) => {
  const current = state.windows[id];
  if (!current) return state;

  return {
    ...state,
    windows: {
      ...state.windows,
      [id]: {
        ...current,
        open: true,
        minimized: false,
        z: state.nextZ,
      },
    },
    focused: id,
    nextZ: state.nextZ + 1,
    startMenu: false,
  };
};

const AppState = (state = initialState, action) => {
  const applicationName = action.payload;

  switch (action.type) {
    case "APPLICATION_OPEN":
      return focusWindow(state, applicationName);

    case "APPLICATION_CLOSE": {
      const current = state.windows[applicationName];
      if (!current) return state;

      return {
        ...state,
        windows: {
          ...state.windows,
          [applicationName]: {
            ...current,
            open: false,
            minimized: false,
          },
        },
        focused:
          state.focused === applicationName ? null : state.focused,
      };
    }

    case "APPLICATION_MINIMIZE": {
      const current = state.windows[applicationName];
      if (!current) return state;

      return {
        ...state,
        windows: {
          ...state.windows,
          [applicationName]: {
            ...current,
            minimized: true,
          },
        },
        focused:
          state.focused === applicationName ? null : state.focused,
      };
    }

    case "APPLICATION_FOCUS":
      return focusWindow(state, applicationName);

    case "APPLICATION_TOGGLE": {
      const current = state.windows[applicationName];
      if (!current || !current.open) {
        return focusWindow(state, applicationName);
      }
      if (current.minimized || state.focused !== applicationName) {
        return focusWindow(state, applicationName);
      }

      return {
        ...state,
        windows: {
          ...state.windows,
          [applicationName]: {
            ...current,
            minimized: true,
          },
        },
        focused: null,
      };
    }

    case "START_MENU_TOGGLE":
      return { ...state, startMenu: !state.startMenu };

    case "START_MENU_CLOSE":
      return state.startMenu ? { ...state, startMenu: false } : state;

    default:
      return state;
  }
};

export default AppState;
