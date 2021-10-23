# 💻 Lab 18 - Biblioteka client-orders-data-access - integracja z NgRx

## 🏋️‍♀️ Lista kroków:

1. **Dodaj `HttpClientModule`, `StoreModule`, `EffectsModule`, `StoreDevtoolsModule`, do tablicy `imports` modułu `ClientShellFeatureModule` w katalogu `libs\client\shell\feature\src\lib`**

   ```typescript
   imports: [
    CommonModule,
    ClientShellFeatureRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
   ]
   ```

2. **Dodaj `StoreModule`, `EffectsModule` do tablicy `imports` modułu `ClientOrdersFeatureShellModule` w katalogu `libs\client\orders\feature\shell\src\lib`**

   ```typescript
   imports: [
    CommonModule,
    ClientOrdersFeatureShellRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([ClientOrdersEffect])
   ]
   ```

3. **Uzupełnij plik `orders-page.component.ts` w katalogu `libs\client\orders\feature\orders\src\lib\orders-page`**

    ```typescript
    export class OrdersPageComponent implements OnInit {
    
      isLoading$: Observable<boolean>;
      orders$: Observable<OrderDto[]>;
      searchQuery$: Observable<string>;
    
      constructor(private store: Store<ClientStateModel>) { }
    
      ngOnInit(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.orders$ = this.store.pipe(select(ordersSelector))
        this.searchQuery$ = this.store.pipe(select(searchQuerySelector))
          .pipe(
            take(1),
            tap(searchQuery => this.store.dispatch(getOrdersAction({ searchQuery })))
          );
      }
    
      handleFilters(event: OrdersFilterModel): void {
        this.store.dispatch(getOrdersAction({ searchQuery: event.searchQuery }));
      }
    
    }
    ```

4. **Uzupełnij plik `orders-page.component.html` w katalogu `libs\client\orders\feature\orders\src\lib\orders-page`**

    ```html
    <div class='client-order-page-navbar-wrapper mb-24'>
      <h2 class='header h2'>Lista zamówień</h2>
    
      <client-orders-ui-orders-filter [query]='searchQuery$ | async'
                                       (filter)='handleFilters($event)'
      >
      </client-orders-ui-orders-filter>
    
      <a class='link' routerLink='/new-order'>Nowe zamówienie</a>
    </div>
    
    <ng-container *ngIf='isLoading$ | async; else content'>
      loading...
    </ng-container>
    
    <ng-template #content>
      <client-orders-ui-orders-list [orders]='orders$ | async'></client-orders-ui-orders-list>
    </ng-template>
    ```

5. **Uruchom aplikacje api**

    ```shell
    nx serve api
    ```

6. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
