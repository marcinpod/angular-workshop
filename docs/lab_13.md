# 💻 Lab 13 - Biblioteka client-orders-data-access - NgRx

## 🏋️‍♀️ Lista kroków:

1. **Zainstaluj ngrx-store**

   ```shell
   npm install @ngrx/store --save
   ```

2. **Zainstaluj ngrx-effects**

   ```shell
   npm install @ngrx/effects --save
   ```

3. **Zainstaluj ngrx-store-devtools**

   ```shell
   npm install @ngrx/store-devtools --save
   ```

    ---

   🎓 Pracując z NgRx pomocna może być wtyczka Redux DevTools `https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd`

    ---


4. **Utwórz bibliotekę client-orders-data-access**

   ```shell
   nx g @nrwl/workspace:library data-access --directory=client/orders
   ```

5. **Usuń export funkcji `clientOrdersDataAccess` w pliku `index.ts` w katalogu `libs\client\orders\data-access\src`**


6. **Usuń pliki `client-orders-data-access.spec.ts`, `client-orders-data-access.ts` w katalogu `libs\client\orders\data-access\src\lib`**
