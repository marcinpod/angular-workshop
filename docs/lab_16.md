# 💻 Lab 16 - Biblioteka client-orders-data-access - Effects

## 🏋️‍♀️ Lista kroków:

1. **Utwórz plik `orders-effect.ts` w katalogu `libs\client\orders\data-access\src\lib`**

   ```typescript
    @Injectable()
    export class ClientOrdersEffect {
    
      constructor(
        private actions$: Actions,
        private httpClient: HttpClient
      ) {
      }
    
      getOrders$ = createEffect(() =>
        this.actions$.pipe(
        ofType(getOrdersAction),
        switchMap(({searchQuery}) => this.httpClient.get<OrderDto[]>('api/orders', { params: this.getParams(searchQuery) })
          .pipe(
            delay(300),
            switchMap((orders) => of(getOrdersSuccessAction( { orders } ))),
            catchError(() => of(getOrdersFailureAction({ error: 'something went wrong' })))
          )
        )
      )
    );
    
    private getParams(query: string | null): HttpParams {
      const params = new HttpParams();
      return query ? params.append('q', query) : params
    }
    
   }
   ```

2. **Dodaj export klasy `ClientOrdersEffect` w pliku `index.ts` w katalogu `libs\client\orders\data-access\src`**

    ```typescript
    export * from './lib/orders-effect';
    ```
