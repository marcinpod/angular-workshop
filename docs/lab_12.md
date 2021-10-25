# 💻 Lab 12 - Biblioteka client-orders-ui-orders-list

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-orders-ui-orders-list z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library orders-list --componentName=orders-list --directory=client/orders/ui
   ```

2. **Dodaj `SharedUiProductsListModule` do tablicy `imports` modułu `ClientOrdersUiOrdersListModule` w katalogu `libs\client\orders\ui\orders-list\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      SharedUiProductsListModule
    ]
    ```

3. **Uzupełnij plik `orders-list.component.html` w katalogu `libs\client\orders\ui\orders-list\src\lib\orders-list`**

    ```html
    <section class='client-orders-list' *ngIf='orders?.length; else emptyList'>
      <ng-container *ngFor='let order of orders'>
        <div class='order'>
          <div class='order-info'>
            <div class='order-info-row'>
              <p class='order-number'>Numer zamówienia: {{ order.orderNumber }}</p>
              <span class='order-status'>{{ order.status }}</span>
            </div>
            <p class='order-comment'>Uwagi: {{ order.comment }}</p>
            <p class='order-date'>Data: {{ order.createdAt }}</p>
          </div>
          <div class='products'>
            <shared-ui-products-list [products]='order.products'></shared-ui-products-list>
          </div>
          <div class='total'>
            <p class='text'>Razem: {{ order.total }}</p>
          </div>
        </div>
      </ng-container>
    </section>
    
    <ng-template #emptyList>
      <h3 class='header h3'>Brak zamówień</h3>
    </ng-template>
    ```

4. **Uzupełnij plik `orders-list.component.ts` w katalogu `libs\client\orders\ui\orders-list\src\lib\orders-list`**

    ```typescript
    @Component({
      selector: 'client-orders-ui-orders-list',
      templateUrl: './orders-list.component.html',
      styleUrls: ['./orders-list.component.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class OrdersListComponent implements OnInit {
    
      @Input() orders: OrderDto[] = [];
    
      constructor() { }
    
      ngOnInit(): void {}
    
    }
    ```

5. **Dodaj `ClientOrdersUiOrdersListModule` do tablicy `imports` modułu `ClientOrdersFeatureOrdersModule` w katalogu `libs\client\orders\feature\orders\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      ClientOrdersUiOrdersFilterModule,
      ClientOrdersUiOrdersListModule,
      RouterModule.forChild([
        {
          path: '',
          component: OrdersPageComponent
        }
      ])
    ]
    ```

6. **Dodaj komponent `OrdersListComponent` do widoku w pliku `orders-page.component.html` w katalogu `libs\client\orders\feature\orders\src\lib\orders-page`**

    ```html
    <div class='client-order-page-navbar-wrapper mb-24'>
      <h2 class='header h2'>Lista zamówień</h2>
      
      <client-orders-ui-orders-filter></client-orders-ui-orders-filter>
    
      <a class='link' routerLink='/new-order'>Nowe zamówienie</a>
    </div>
   
    <client-orders-ui-orders-list></client-orders-ui-orders-list>
    ```

7. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
<br>

[➡️ Next lab ➡️](./lab_13.md)
