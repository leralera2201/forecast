import { ACTION_STATUS } from '../../../store/action-types';

import FORECAST_ACTION_TYPES from '../action-types/forecast.action-types';

const initialState = {
  data: {},
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
        data: forecast,
        status: ACTION_STATUS.SUCCESS,
      };
    }
    case FORECAST_ACTION_TYPES.FORECAST_FETCH.ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        data: null,
        status: ACTION_STATUS.ERROR,
        error,
      };
    }
    default:
      return state;
  }
};

export default ForecastReducer;