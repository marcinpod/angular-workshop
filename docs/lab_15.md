# 💻 Lab 15 - Biblioteka client-orders-data-access - Reducers

## 🏋️‍♀️ Lista kroków:

1. **Utwórz plik `client-orders-state.model.ts` w katalogu `libs/shared/models/src/lib`**

   ```typescript
   export interface ClientOrdersStateModel {
     isLoading: boolean,
     searchQuery: string,
     orders: OrderDto[],
     error: string;
   }
   ```

2. **Dodaj export interfejsu `ClientOrdersStateModel` w pliku `index.ts` w katalogu `libs/shared/models/src`**

    ```typescript
    export * from './lib/client-orders-state.model';
    ```

3. **Utwórz plik `orders-reducer.ts` w katalogu `libs\client\orders\data-access\src\lib`**

   ```typescript
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
   ```

4. **Dodaj export reducer'a w pliku `index.ts` w katalogu `libs\client\orders\data-access\src`**

    ```typescript
    export * from './lib/orders-reducer';
    ```
<br>

[➡️ Next lab ➡️](./lab_16.md)
