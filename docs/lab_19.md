# 💻 Lab 19 - Biblioteka client-orders-feature-new-order

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-orders-ui-orders-list**

   ```shell
   nx generate @nrwl/angular:lib new-order --strict=false --directory=client/orders/feature
   ```

2. **Utwórz komponent new-order-page**

   ```shell
   nx generate @nrwl/angular:component new-order-page --style=scss --project=client-orders-feature-new-order
   ```

3. **Dodaj `ReactiveFormsModule`, `RouterModule` do tablicy `imports`, `RouterModule` do tablicy `exports` modułu `ClientOrdersFeatureNewOrderModule` w katalogu `libs\client\orders\feature\new-order\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild([
        {
          path: '',
          component: NewOrderPageComponent
        }
      ])
    ],
    exports: [RouterModule]
    ```

4. **Uzupełnij plik `new-order-page.component.ts` w katalogu `libs\client\orders\feature\new-order\src\lib\new-order-page`**

    ```typescript
    export class NewOrderPageComponent implements OnInit {
    
      form: FormGroup;
    
      constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
          comment: [null, [Validators.required, Validators.minLength(10)]],
          data: [null, Validators.required],
          products: this.formBuilder.array([])
        });
      }
    
      ngOnInit(): void {}
    
      handleSubmit(): void {
        console.log(this.form.getRawValue());
      }
    
      addProduct(): void {
        (this.form.get('products') as FormArray).push(
          this.formBuilder.group({
            name: [null, Validators.required],
            price: [null, Validators.required]
          }));
      }
    
      get products(): FormGroup[] {
        return (this.form.get('products') as FormArray).controls as FormGroup[];
      }
    
    }
    ```

5. **Uzupełnij plik `new-order-page.component.html` w katalogu `libs\client\orders\feature\new-order\src\lib\new-order-page`**

    ```html
    <h2 class='header h2 mb-24'>Nowe zamówienie</h2>
    
    <div class='client-new-order-wrapper'>
      <form class='form' [formGroup]='form' (ngSubmit)='handleSubmit()'>
        <fieldset class='fieldset'>
          <legend class='legend'>Informacje o zamówieniu</legend>
    
          <div class='form-control'>
            <label class='label' for='nr'>Uwagi</label>
            <input class='input' id='nr' type='text' formControlName='comment'>
          </div>
    
          <div class='form-control'>
            <label class='label' for='data'>Data</label>
            <input class='input' id='data' type='text' formControlName='data'>
          </div>
    
        </fieldset>
    
        <fieldset class='fieldset'>
          <legend class='legend'>
            Produkty
            <button type='button' class='button' (click)='addProduct()'>Dodaj produkt</button></legend>
          <ul class='list'>
            <li class='list-item' *ngFor='let group of products; let i = index'>
              <section [formGroup]='group' class='form-array-group'>
    
                <div class='form-control'>
                  <label class='label' [for]="'name' + i">Produkt</label>
                  <input class='input' [id]="'name' + i" type='text' formControlName='name'>
                </div>
    
                <div class='form-control'>
                  <label class='label' [for]="'price' + i">Cena</label>
                  <input class='input' [id]="'price' + i" type='text' formControlName='price'>
                </div>
              </section>
            </li>
          </ul>
        </fieldset>
    
        <button type='submit' class='button submit-button'>Zapisz</button>
      </form>
    </div>
    ```

6. **Uzupełnij definicję routingu w module `ClientOrdersFeatureShellRoutingModule` w katalogu ``**

   ```typescript
   const routes: Route[] = [
    {
      path: '',
      loadChildren: async () => (await import('@angular-workshop/client/orders/feature/orders')).ClientOrdersFeatureOrdersModule
    },
    {
      path: 'new-order',
      loadChildren: async () => (await import('@angular-workshop/client/orders/feature/new-order')).ClientOrdersFeatureNewOrderModule
    }
   ]
   ```

7. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
