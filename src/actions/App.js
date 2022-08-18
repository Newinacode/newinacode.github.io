export const CloseApplication = (application_name) => {
  return {
    type: "APPLICATION_CLOSE",
    payload: application_name,
  };
};

export const OpenApplication = (application_name) => {
  return {
    type: "APPLICATION_OPEN",
    payload: application_name,
  };
};
