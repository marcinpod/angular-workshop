# 💻 Lab 11 - Biblioteka client-orders-ui-orders-filter

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-orders-ui-orders-filter z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library orders-filter --componentName=orders-filter --directory=client/orders/ui
   ```

2. **Utwórz plik `orders-filter.model.ts` w katalogu `libs/shared/models/src/lib`**

   ```typescript
    export interface OrdersFilterModel {
      searchQuery: string
    }
   ```

3. **Dodaj export interfejsu `OrdersFilterModel` w pliku `index.ts` w katalogu `libs/shared/models/src`**

   ```typescript
   export * from './lib/orders-filter.model';
   ```

4. **Uzupełnij plik `orders-filter.component.html` w katalogu `libs\client\orders\ui\orders-filter\src\lib\orders-filter`**

    ```html
    <form [formGroup]='form' (ngSubmit)='onSubmit()'>
      <input class='input' placeholder='...' type='text' formControlName='searchQuery'>
      <button class='button' type='submit'>Wyszukaj</button>
    </form>
    ```

5. **Uzupełnij plik `orders-filter.component.ts` w katalogu `libs\client\orders\ui\orders-filter\src\lib\orders-filter`**

    ```typescript
    @Component({
      selector: 'client-orders-ui-orders-filter',
      templateUrl: './orders-filter.component.html',
      styleUrls: ['./orders-filter.component.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class OrdersFilterComponent implements OnInit {
    
      @Input() set query(value: string) {
        this.form.patchValue({ searchQuery: value });
      }
    
      @Output() filter: EventEmitter<OrdersFilterModel> = new EventEmitter<OrdersFilterModel>();
    
      form: FormGroup;
    
      constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
          searchQuery: [null]
        })
      }
    
      ngOnInit(): void {}
    
      onSubmit(): void {
        this.filter.emit(this.form.getRawValue());
      }
    }
    ```

6. **Dodaj `ReactiveFormsModule` do tablicy `imports` modułu `ClientOrdersUiOrdersFilterModule` w katalogu `libs\client\orders\ui\orders-filter\src\lib`**

   ```typescript
   imports: [
    CommonModule,
    ReactiveFormsModule
   ]
   ```

7. **Dodaj `ClientOrdersUiOrdersFilterModule` do tablicy `imports` modułu `ClientOrdersFeatureOrdersModule` w katalogu `libs\client\orders\feature\orders\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      ClientOrdersUiOrdersFilterModule,
      RouterModule.forChild([
        {
          path: '',
          component: OrdersPageComponent
        }
      ])
    ]
    ```

8. **Dodaj komponent `OrdersFilterComponent` do widoku w pliku `orders-page.component.html` w katalogu `libs\client\orders\feature\orders\src\lib\orders-page`**

    ```html
    <div class='client-order-page-navbar-wrapper mb-24'>
      <h2 class='header h2'>Lista zamówień</h2>
      
      <client-orders-ui-orders-filter></client-orders-ui-orders-filter>
    
      <a class='link' routerLink='/new-order'>Nowe zamówienie</a>
    </div>
    ```

9. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
<br>

[➡️ Next lab ➡️](./lab_12.md)
