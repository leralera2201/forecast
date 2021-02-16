import { combineReducers } from 'redux';

import ForecastReducer from '../../pages/Forecast/reducers/forecast.reducer';

const rootReducer = combineReducers({
  forecast: ForecastReducer,
});

export default rootReducer;