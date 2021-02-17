export const ACTION_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

export const createActionTypes = (actionTypeName) => ({
  START: `${actionTypeName}_START`,
  IN_PROGRESS: `${actionTypeName}_IN_PROGRESS`,
  SUCCESS: `${actionTypeName}_SUCCESS`,
  ERROR: `${actionTypeName}_ERROR`,
  RESET: `${actionTypeName}_RESET`,
});
