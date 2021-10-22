import { ClientOrdersStateModel } from '@angular-workshop/shared/models';
import { createReducer, on } from '@ngrx/store';
import {
  getOrdersAction,
  getOrdersFailureAction,
  getOrdersSuccessAction
} from '@angular-workshop/client/orders/data-access';

const initialState: ClientOrdersStateModel = {
  isLoading: false,
  searchQuery: null,
  orders: null,
  error: null
}

export const ordersReducer = createReducer(
  initialState,
  on(
    getOrdersAction,
    (state, action) => ({
      ...state,
      isLoading: true,
      searchQuery: action.searchQuery
    })
  ),
  on(
    getOrdersSuccessAction,
    (state, action) => ({
      ...state,
      orders: action.orders,
      isLoading: false
    })
  ),
  on(
    getOrdersFailureAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
)
