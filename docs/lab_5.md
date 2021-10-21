# 💻 Lab 5 - Biblioteka shared-ui-layout

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę shared-ui-layout z wykorzystaniem generatora ui-library**

   ```shell
   nx workspace-generator ui-library layout --componentName=layout --directory=shared/ui
   ```

2. **Uzupełnij plik `layout.component.html` w katalogu `libs/shared/ui/layout/src/lib/layout`**

   ```html
   <div class='shared-layout'>
    <header class='header'>
      <ng-content select='[slot=navbar]'></ng-content>
    </header>
    <nav class='nav'>
      <ng-content select='[slot=sidenav]'></ng-content>
    </nav>
    <main class='main'>
      <router-outlet></router-outlet>
    </main>
   </div>
   ```

3. **Dodaj `RouterModule` w tablicy importów modułu `SharedUiLayoutModule` w katalogu `libs/shared/ui/layout/src/lib`**

   ```typescript
   imports: [
     CommonModule,
     RouterModule
   ]
   ```
