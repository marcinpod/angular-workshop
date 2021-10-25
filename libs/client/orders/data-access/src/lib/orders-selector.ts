import { ClientOrdersStateModel, ClientStateModel } from '@angular-workshop/shared/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ordersFeatureSelector = createFeatureSelector<ClientStateModel, ClientOrdersStateModel>('orders');

export const isLoadingSelector = createSelector(
  ordersFeatureSelector,
  (state) => state.isLoading
);

export const searchQuerySelector = createSelector(
  ordersFeatureSelector,
  (state) => state.searchQuery
);

export const ordersSelector = createSelector(
  ordersFeatureSelector,
  (state) => state.orders
);

export const errorSelector = createSelector(
  ordersFeatureSelector,
  (state) => state.error
)
