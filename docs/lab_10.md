# 💻 Lab 10 - Biblioteka client-orders-feature-shell

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-orders-feature-shell**

   ```shell
   nx generate @nrwl/angular:lib shell --strict=false --directory=client/orders/feature
   ```

2. **Utwórz plik `client-orders-feature-shell-routing.module.ts` w katalogu `libs/client/orders/feature/shell/src/lib`**

   ```typescript
   const routes: Route[] = [
    {
      path: '',
      loadChildren: async () => (await import('@angular-workshop/client/orders/feature/orders')).ClientOrdersFeatureOrdersModule
    }
   ]
    
   @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
   })
   export class ClientOrdersFeatureShellRoutingModule {}
   ```

3. **Dodaj `ClientOrdersFeatureShellRoutingModule` do tablicy `imports` modułu `ClientOrdersFeatureShellModule` w katalogu `libs/client/orders/feature/shell/src/lib`**

   ```typescript
   imports: [
    CommonModule,
    ClientOrdersFeatureShellRoutingModule
   ]
   ```

4. **Uzupełnij definicję routingu w module `ClientShellFeatureRoutingModule` w katalogu `libs\client\shell\feature\src\lib`**

   ```typescript
   {
    path: '',
    component: LayoutComponent,
    children: [
     {
      path: '',
      loadChildren: async () => (await import('@angular-workshop/client/orders/feature/shell')).ClientOrdersFeatureShellModule
     }
    ]
   }
   ```

5. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
<br>

[➡️ Next lab ➡️](./lab_11.md)
