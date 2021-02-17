import { createSelector } from "reselect";

import { ACTION_STATUS } from "../../../store/action-types";

export const forecastStateSelector = (state) => state.forecast;

export const forecastFetchDataSelector = createSelector(
  forecastStateSelector,
  ({ data }) => data
);

export const forecastItemsDataSelector = createSelector(
  forecastFetchDataSelector,
  ({ items }) => items
);

export const forecastCurrentItemsDataSelector = createSelector(
  forecastFetchDataSelector,
  ({ currentItems }) => currentItems
);

export const forecastFetchStatusSelector = createSelector(
  forecastStateSelector,
  ({ status }) => status
);

export const forecastFetchErrorSelector = createSelector(
  forecastStateSelector,
  ({ error }) => error
);

export const forecastFetchIsStatusInProgress = createSelector(
  forecastFetchStatusSelector,
  (status) => status === ACTION_STATUS.IN_PROGRESS
);
