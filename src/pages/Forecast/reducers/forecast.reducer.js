import { ACTION_STATUS } from "../../../store/action-types";

import FORECAST_ACTION_TYPES from "../action-types/forecast.action-types";

const initialState = {
  data: {
    items: [],
    currentItems: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  status: ACTION_STATUS.NOT_STARTED,
  error: null,
};

const ForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORECAST_ACTION_TYPES.FORECAST_FETCH.IN_PROGRESS: {
      return {
        ...state,
        status: ACTION_STATUS.IN_PROGRESS,
      };
    }
    case FORECAST_ACTION_TYPES.FORECAST_FETCH.SUCCESS: {
      const { forecast } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          items: forecast.daily.data,
        },
        status: ACTION_STATUS.SUCCESS,
      };
    }
    case FORECAST_ACTION_TYPES.FORECAST_FETCH.ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          items: [],
        },
        status: ACTION_STATUS.ERROR,
        error,
      };
    }
    case FORECAST_ACTION_TYPES.FORECAST_PAGINATE: {
      const { items, itemsPerPage, currentPage } = state.data;
      const indexOfLastItem = currentPage * itemsPerPage;
      const currentItems = items.slice(0, indexOfLastItem);
      return {
        ...state,
        data: {
          ...state.data,
          currentItems,
          currentPage: currentPage + 1,
        },
      };
    }
    default:
      return state;
  }
};

export default ForecastReducer;
