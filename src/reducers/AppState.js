const initialState = {
  terminal: false,
  valorant: false,
  fortnite: false,
  startup: false,
  portfolio: false,
};
const AppState = (state = initialState, action) => {
  const applicationName = action.payload;
  switch (action.type) {
    case "APPLICATION_CLOSE":
      return { ...state, [applicationName]: false };
    case "APPLICATION_OPEN":
      return { ...state, [applicationName]: true };
    default:
      return state;
  }
};

export default AppState;
