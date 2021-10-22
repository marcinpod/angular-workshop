# 💻 Lab 8 - Biblioteki client-shell-ui

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-shell-ui-sidenav z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library sidenav --componentName=sidenav --directory=client/shell/ui
   ```

2. **Uzupełnij plik `sidenav.component.html` w katalogu `libs/client/shell/ui/sidenav/src/lib/sidenav`**

   ```html
    <div class='client-sidenav'>
      <div class='logo-wrapper'>
        <h1 class='header h1'>Client App</h1>
      </div>
      <ul class='list'>
        <li class='list-item'>
          <a class='link' routerLink='/'>Zamówienia</a>
        </li>
      </ul>
    </div>
   ```

3. **Dodaj `RouterModule` do tablicy importów modułu `ClientShellUiSidenavModule` w katalogu `libs/client/shell/ui/sidenav/src/lib`**

   ```typescript
   imports: [
    CommonModule,
    RouterModule
   ]
   ```

4. **Utwórz bibliotekę client-shell-ui-navbar z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library navbar --componentName=navbar --directory=client/shell/ui
   ```

5. **Uzupełnij plik `navbar.component.html` w katalogu `libs/client/shell/ui/navbar/src/lib/navbar`**

   ```html
    <div class='client-navbar'></div>
   ```

6. **Utwórz bibliotekę client-shell-ui-layout z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library layout --componentName=layout --directory=client/shell/ui
   ```

7. **Dodaj `SharedUiLayoutModule, ClientShellUiNavbarModule, ClientShellUiSidenavModule` do tablicy importów modułu `ClientShellUiLayoutModule` w katalogu `libs/client/shell/ui/layout/src/lib`**

    ```typescript
    imports: [
      CommonModule,
      SharedUiLayoutModule,
      ClientShellUiNavbarModule,
      ClientShellUiSidenavModule
    ]
    ```

8. **Uzupełnij plik `layout.component.html` w katalogu `libs/client/shell/ui/layout/src/lib/layout`**

    ```html
     <shared-ui-layout>
       <client-shell-ui-navbar slot='navbar'></client-shell-ui-navbar>
       <client-shell-ui-sidenav slot='sidenav'></client-shell-ui-sidenav>
     </shared-ui-layout>
    ```

9. **Dodaj export klasy `LayoutComponent` w pliku `index.ts` w katalogu `libs/client/shell/ui/layout/src`**

    ```typescript
    export * from './lib/layout/layout.component';
    ```

10. **Uzupełnij definicję routingu w pliku `client-shell-feature-routing.module.ts` w katalogu `libs/client/shell/feature/src/lib`**

    ```typescript
    const routes: Route[] = [
      { 
        path: '',
        component: LayoutComponent
      } 
    ]
    ```

11. **Dodaj `RouterModule, ClientShellFeatureModule` do tablicy importów modułu `AppModule` w katalogu `apps\client\src\app`**

    ```typescript
    imports: [
      BrowserModule,
      RouterModule,
      ClientShellFeatureModule
    ]
    ```

12. **Uzupełnij plik `app.component.html` w katalogu `apps\client\src\app`**

    ```html
    <router-outlet></router-outlet>
    ```

13. **Usuń domyślne style z pliku `app.component.scss` w katalogu `apps\client\src\app`**


14. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
