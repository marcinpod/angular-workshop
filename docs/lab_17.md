# 💻 Lab 17 - Biblioteka client-orders-data-access - Selectors

## 🏋️‍♀️ Lista kroków:

1. **Utwórz plik `client-state.model.ts` w katalogu `libs/shared/models/src/lib`**

   ```typescript
    export interface ClientStateModel {
      orders: ClientOrdersStateModel;
    }
   ```

2. **Dodaj export interfejsu `ClientStateModel` w pliku `index.ts` w katalogu `libs/shared/models/src`**

    ```typescript
    export * from './lib/client-state.model';
    ```

3. **Utwórz plik `orders-selector.ts` w katalogu `libs\client\orders\data-access\src\lib`**

   ```typescript
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
   ```

4. **Dodaj export w pliku `index.ts` w katalogu `libs\client\orders\data-access\src`**

    ```typescript
    export * from './lib/orders-selector';
    ```
<br>

[➡️ Next lab ➡️](./lab_18.md)
