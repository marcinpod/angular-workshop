import { createAction, props } from '@ngrx/store';
import { OrdersActionTypes } from './orders-action-types';
import { OrderDto } from '@angular-workshop/shared/models';

export const getOrdersAction = createAction(
  OrdersActionTypes.GET_ORDERS,
  props<{ searchQuery: string | null }>()
);

export const getOrdersSuccessAction = createAction(
  OrdersActionTypes.GET_ORDERS_SUCCESS,
  props<{ orders: OrderDto[] }>()
);

export const getOrdersFailureAction = createAction(
  OrdersActionTypes.GET_ORDERS_FAILURE,
  props<{ error: string }>()
);
