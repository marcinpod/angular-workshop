# 💻 Lab 7 - Biblioteka client-shell-feature

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę client-shell-feature**

   ```shell
   nx generate @nrwl/angular:lib feature --directory=client/shell
   ```

2. **Utwórz plik `client-shell-feature-routing.module.ts` w katalogu `libs/client/shell/feature/src/lib`**

   ```typescript
    const routes: Route[] = []
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class ClientShellFeatureRoutingModule {}
   ```

3. **Dodaj `ClientShellFeatureRoutingModule` do tablicy importów w module `ClientShellFeatureModule` w katalogu `libs/client/shell/feature/src/lib`**

   ```typescript
   imports: [
    CommonModule,
    ClientShellFeatureRoutingModule,
   ]
   ```
