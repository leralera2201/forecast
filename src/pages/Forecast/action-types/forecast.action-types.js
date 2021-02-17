import { createActionTypes } from "../../../store/action-types";

const FORECAST_ACTION_TYPES = {
  FORECAST_FETCH: createActionTypes("FORECAST_FETCH"),
  FORECAST_PAGINATE: "FORECAST_PAGINATE",
};

export default FORECAST_ACTION_TYPES;
