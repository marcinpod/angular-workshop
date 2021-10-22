# 💻 Lab 6 - Biblioteka shared-ui-products-list, Storybook

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę shared-ui-products-list z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library products-list --componentName=products-list --directory=shared/ui
   ```

2. **Uzupełnij plik `products-list.component.html` w katalogu `libs/shared/ui/products-list/src/lib/products-list`**

   ```html
    <div class='shared-products-list' *ngIf='!isLoading; else loading'>
      <ng-container *ngFor='let product of products'>
        <div class='product'>
          <div class='product-col'>
            <img class='product-image' [src]='product.imageUrl' alt=''>
            <span class='product-name'>{{ product.name }}</span>
          </div>
          <span class='product-price'> {{ product.price }} </span>
        </div>
      </ng-container>
    </div>
    
    <ng-template #loading>
      loading...
    </ng-template>
   ```

3. **W komponencie `ProductsListComponent` w katalogu `libs/shared/ui/products-list/src/lib/products-list` zmień domyślną strategię wykrywania zmian na `OnPush` oraz dodaj pola `products`, `isLoading`**

   ```typescript
    @Component({
      selector: 'shared-ui-products-list',
      templateUrl: './products-list.component.html',
      styleUrls: ['./products-list.component.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class ProductsListComponent implements OnInit {
    
      @Input() products: ProductDto[] = [];
    
      @Input() isLoading: boolean = false;
    
      constructor() { }
    
      ngOnInit(): void {}
    
    }
   ```

4. **Dodaj wtyczkę storybook do obszaru roboczego**

   ```shell
   npm install @nrwl/storybook
   ```

5. **Wygeneruj storybook'a dla biblioteki `shared-ui-products-list` (odpowiedzi N/Y/N)**

   ```shell
   nx generate @nrwl/angular:storybook-configuration shared-ui-products-list
   ```

6. **Uzupełnij stories w pliku `products-list.component.stories.ts` w katalogu `libs/shared/ui/products-list/src/lib/products-list`**

   ```typescript
   export const Primary = Template.bind({});
   Primary.args = {
    products:  [
      {
        name: 'Krzesło konferencyjne',
        price: '100 zł',
        imageUrl: 'https://iili.io/5qhfRV.jpg'
      },
      {
        name: 'Krzesło ISO',
        price: '100 zł',
        imageUrl: 'https://iili.io/5qhfRV.jpg'
      }
    ],
    isLoading: false
   }
      
   export const Loading = Template.bind({});
   Loading.args = {
     products:  [],
     isLoading: true
   }
   ```

7. **Dodaj style do pliku `styles.scss` w katalogu `apps\client\src`**

   <details>
   <summary>Rozwiń</summary> 

   ```scss
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
    
    body {
      padding: 0;
      margin: 0;
      height: 100vh;
      background-color: rgba(0, 0, 0, .1);
      font-family: 'Open Sans', sans-serif;
    }
    
    ::-webkit-scrollbar {
      width: 0;
    }
    
    .shared-layout {
      height: 100vh;
      display: grid;
      grid-template-columns: 200px auto;
      grid-template-rows: auto 1fr;
      grid-template-areas:
      "sidenav header"
      "sidenav content";
    
      .header {
        grid-area: header;
      }
      
      .nav {
        grid-area: sidenav;
      }
      
      .main {
        padding: 16px;
        grid-area: content;
        max-height: calc(100vh - 60px);
        overflow-y: auto;
      }
    }
    
    .shared-products-list {
      padding: 16px;
    
      .product:first-of-type {
        padding-top: 0;
      }
    
      .product:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
    
    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: solid 1px #ddd;
      padding: 16px 0;
    
      &-col {
        display: flex;
        align-items: center;
      }
    
      &-name {
        font-size: 14px;
      }
    
      &-price {
        font-size: 14px;
        font-weight: bold;
      }
    
      &-image {
        height: 40px;
        margin-right: 16px;
      }
    }
    
    .form-error-message {
      margin: 4px 0 0;
      font-size: 12px;
      font-weight: bold;
      color: #f44336;
    
      &.is-hidden {
        margin: 0;
      }
    }
    
    client-shell-ui-sidenav {
      display: block;
      height: 100%;
      width: 100%;
    }
    
    .client-sidenav {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #212529;
    
      .link {
        display: block;
        width: auto;
        text-align: center;
      }
    
      .logo-wrapper {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .header {
        color: #fff;
      }
    }
    
    .client-navbar {
      min-height: 60px;
      padding: 0 16px;
      background-color: #F8F9FA;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    .client-order-page-navbar-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    
    .client-orders-list {
    
      .order:last-of-type {
        margin-bottom: 0;
      }
    
      .order {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        margin-bottom: 24px;
        border-radius: 2px;
      
        &-info {
          padding: 16px;
          border-bottom: 1px solid #ddd;
          font-size: 16px;
      
          &-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
      
            .order-number {
              margin: 0;
            }
      
            .order-status {
              padding: 4px 8px;
              background-color: #0d6efd;
              border-radius: 4px;
              color: #ffffff;
              text-transform: uppercase;
              font-size: 12px;
              font-weight: bold;
            }
          }
      
        }
      
        &-date {
          margin: 0;
          font-size: 14px;
        }
      
        &-comment {
          margin: 4px 0;
        }
      
        .total {
          border-top: 1px solid #ddd;
          padding: 16px;
          text-align: right;
      
          .text {
            margin: 0;
            font-weight: bold;
          }
        }
      }
    }
    
    .client-new-order-wrapper {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      margin-bottom: 24px;
      border-radius: 2px;
    
      .form {
        padding: 16px;
    
        .fieldset {
          margin: 0 0 16px;
    
          &:last-of-type {
            margin-bottom: 0;
          }
    
          .legend {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
    
          .form-control {
            margin-top: 8px;
            display: flex;
            flex-direction: column;
    
            &:first-of-type {
              margin-top: 0;
            }
          }
        }
      }
    
      .list-item .form-array-group {
        margin: 0 0 32px;
      }
    }
    
    .button,
    .link {
      background-color: #0d6efd;
      border: solid 1px #0d6efd;
      border-radius: 2px;
      color: #ffffff;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 13px;
      text-decoration: none;
    
      &:hover {
        color: #ffffff;
      }
    }
    
    .header {
      margin: 0;
    
      &.h1 {
        font-size: 24px;
      }
    
      &.h2 {
        font-size: 20px;
      }
    
      &.h3 {
        font-size: 16px;
      }
    }
    
    .fieldset {
      border: none;
      padding: 0;
    }
    
    .legend {
      padding: 0 0 16px;
      font-size: 16px;
    }
    
    .label {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    
    .input {
      padding: 7px 4px;
    }
    
    .input ~ .button {
      margin-left: 8px;
    }
    
    .list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    .mb-24 {
      margin-bottom: 24px;
    } 
   ```
   </details> 


8. **Dodaj style do pliku `products-list.component.scss` w katalogu `libs/shared/ui/products-list/src/lib/products-list`**

   <details>
   <summary>Rozwiń</summary> 
    
   ```scss
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
    
    :host {
      font-family: 'Open Sans', sans-serif;
    }
    
    .shared-products-list {
      padding: 16px;
    
      .product:first-of-type {
        padding-top: 0;
      }
    
      .product:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
      }
    } 
    
    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: solid 1px #ddd;
      padding: 16px 0;
    
      &-col {
        display: flex;
        align-items: center;
      }
    
      &-name {
        font-size: 14px;
      }
    
      &-price {
        font-size: 14px;
        font-weight: bold;
      }
    
      &-image {
        height: 40px;
        margin-right: 16px;
      }
    }
   ```
   </details> 


9. **Uruchom storybook'a**

   ```shell
   nx storybook shared-ui-products-list
   ```
