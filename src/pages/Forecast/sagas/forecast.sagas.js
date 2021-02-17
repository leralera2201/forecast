import { takeLatest, call, put } from "redux-saga/effects";

import { getForecast } from "../../../api/forecast";

import {
  fetchForecastInProgress,
  fetchForecastSuccess,
  fetchForecastError,
} from "../actions/forecast.actions";
import FORECAST_ACTION_TYPES from "../action-types/forecast.action-types";
import { paginateForecast } from "./../actions/forecast.actions";

export function* forecastFetchSaga({ payload: { lat, lng } }) {
  try {
    yield put(fetchForecastInProgress());
    const data = yield call(getForecast, { lat, lng });
    yield put(fetchForecastSuccess(data));
    yield put(paginateForecast());
  } catch (e) {
    yield put(fetchForecastError("Something went wrong. Try again"));
  }
}

export function* forecastFetchWatcher() {
  yield takeLatest(
    FORECAST_ACTION_TYPES.FORECAST_FETCH.START,
    forecastFetchSaga
  );
}
