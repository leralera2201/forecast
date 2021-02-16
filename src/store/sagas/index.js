import { all, fork } from 'redux-saga/effects';

import { forecastFetchWatcher } from '../../pages/Forecast/sagas/forecast.sagas';

export default function* rootSaga() {
  yield all([forecastFetchWatcher].map((saga) => fork(saga)));
}