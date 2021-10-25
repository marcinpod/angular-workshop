# 💻 Lab 9 - Biblioteka client-orders-feature-orders

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-orders-feature-orders**

   ```shell
   nx generate @nrwl/angular:lib orders --strict=false --directory=client/orders/feature
   ```

2. **Utwórz komponent orders-page**

   ```shell
   nx generate @nrwl/angular:component orders-page --style=scss --project=client-orders-feature-orders
   ```

3. **Uzupełnij plik `orders-page.component.html` w katalogu `libs\client\orders\feature\new-order\src\lib\new-order-page`**

    ```html
    <div class='client-order-page-navbar-wrapper mb-24'>
      <h2 class='header h2'>Lista zamówień</h2>
      <a class='link' routerLink='/new-order'>Nowe zamówienie</a>
    </div>
    ```

4. **Dodaj `RouterModule` do tablicy `imports`, `exports` modułu `ClientOrdersFeatureOrdersModule` i uzupełnij definicję routingu**

    ```typescript
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: OrdersPageComponent
        }
      ])
    ],
    exports: [
      RouterModule
    ]
    ```
<br>

[➡️ Next lab ➡️](./lab_10.md)
