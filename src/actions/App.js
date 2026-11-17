export const OPEN_APPLICATION = "APPLICATION_OPEN";
export const CLOSE_APPLICATION = "APPLICATION_CLOSE";
export const MINIMIZE_APPLICATION = "APPLICATION_MINIMIZE";
export const FOCUS_APPLICATION = "APPLICATION_FOCUS";
export const TOGGLE_APPLICATION = "APPLICATION_TOGGLE";
export const TOGGLE_START_MENU = "START_MENU_TOGGLE";
export const CLOSE_START_MENU = "START_MENU_CLOSE";

export const OpenApplication = (application_name) => ({
  type: OPEN_APPLICATION,
  payload: application_name,
});

export const CloseApplication = (application_name) => ({
  type: CLOSE_APPLICATION,
  payload: application_name,
});

export const MinimizeApplication = (application_name) => ({
  type: MINIMIZE_APPLICATION,
  payload: application_name,
});

export const FocusApplication = (application_name) => ({
  type: FOCUS_APPLICATION,
  payload: application_name,
});

export const ToggleApplication = (application_name) => ({
  type: TOGGLE_APPLICATION,
  payload: application_name,
});

export const ToggleStartMenu = () => ({
  type: TOGGLE_START_MENU,
});

export const CloseStartMenu = () => ({
  type: CLOSE_START_MENU,
});
