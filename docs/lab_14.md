# 💻 Lab 14 - Biblioteka client-orders-data-access - Actions

## 🏋️‍♀️ Lista kroków:

1. **Utwórz plik `orders-action-types.ts` w katalogu `libs\client\orders\data-access\src\lib`**

   ```typescript
   export enum OrdersActionTypes {
     GET_ORDERS = '[Orders] Get orders',
     GET_ORDERS_SUCCESS = '[Orders] Get orders success',
     GET_ORDERS_FAILURE = '[Orders] Get orders failure',
   }
   ```

2. **Utwórz plik `orders-action.ts` w katalogu `libs\client\orders\data-access\src\lib`**

   ```typescript
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
   ```

3. **Dodaj export akcji w pliku `index.ts` w katalogu `libs\client\orders\data-access\src`**

    ```typescript
    export * from './lib/orders-action';
    ```
