import FORECAST_ACTION_TYPES from '../action-types/forecast.action-types';

export const fetchForecastStart = (lat, lng) => ({
  type: FORECAST_ACTION_TYPES.FORECAST_FETCH.START,
  payload: { lat, lng },
});

export const fetchForecastInProgress = () => ({
  type: FORECAST_ACTION_TYPES.FORECAST_FETCH.IN_PROGRESS,
});

export const fetchForecastSuccess = (forecast) => ({
  type: FORECAST_ACTION_TYPES.FORECAST_FETCH.SUCCESS,
  payload: { forecast },
});

export const fetchForecastError = (error) => ({
  type: FORECAST_ACTION_TYPES.FORECAST_FETCH.ERROR,
  payload: { error },
});