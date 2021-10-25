# 💻 Lab 22 - Biblioteka shared-portal

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę shared-portal**

    ```shell
    nx generate @nrwl/angular:lib portal --strict=false --directory=shared
    ```

2. **Utwórz serwis z nazwą portal**

   ```shell
   nx generate @nrwl/angular:service portal --project=shared-portal
   ```

3. **Uzupełnij plik `portal.service.ts` w katalogu `libs\shared\portal\src\lib`**

   ```typescript
    export class PortalService {
    
      private targets: Map<string, ViewContainerRef>;
    
      constructor() {
        this.targets = new Map<string, ViewContainerRef>();
      }
    
      addTarget(targetName: string, vcr: ViewContainerRef): void {
        this.targets.set(targetName, vcr);
      }
    
      attachToTarget(targetName: string, templateRef: TemplateRef<any>): void {
        this.getTarget(targetName)?.createEmbeddedView(templateRef);
      }
    
      clearTarget(targetName: string): void {
        this.getTarget(targetName)?.clear();
      }
    
      targetIsEmpty(targetName: string): boolean {
        return this.getTarget(targetName)?.length === 0;
      }
    
      private getTarget(targetName: string): ViewContainerRef | null {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
      }
    
    }
   ```

4. **Utwórz dyrektywę portal-target**

   ```shell
   nx generate @nrwl/angular:directive portal-target --export=true --project=shared-portal
   ```

5. **Uzupełnij plik `portal-target.directive.ts` w katalogu `libs\shared\portal\src\lib`**

   ```typescript
    @Directive({
      selector: '[portalTarget]'
    })
    export class PortalTargetDirective {
    
      @Input('portalTarget') targetName: string = '';
    
      constructor(private viewContainerRef: ViewContainerRef, private portalService: PortalService) { }
    
      ngOnInit(): void {
        this.portalService.addTarget(this.targetName, this.viewContainerRef);
      }
    
    }   
   ```

6. **Utwórz dyrektywę portal-attach-to**

   ```shell
   nx generate @nrwl/angular:directive portal-attach-to --export=true --project=shared-portal
   ```

7. **Uzupełnij plik `portal-attach-to.directive.ts` w katalogu `libs\shared\portal\src\lib`**

   ```typescript
    @Directive({
      selector: '[portalAttachTo]'
    })
    export class PortalAttachToDirective implements OnInit, DoCheck, OnDestroy {
    
      @Input('portalAttachTo') target: string = '';
    
      constructor(private templateRef: TemplateRef<any>, private portalService: PortalService) { }
    
      ngOnInit(): void {}
    
      ngDoCheck(): void {
        if (this.portalService.targetIsEmpty(this.target)) {
          this.portalService.attachToTarget(this.target, this.templateRef);
        }
      }
    
      ngOnDestroy(): void {
        this.portalService.clearTarget(this.target);
      }
    
    }
   ```

8. **Dodaj `SharedPortalModule` do tablicy `imports` modułu `ClientShellUiNavbarModule` w katalogu `libs\client\shell\ui\navbar\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      SharedPortalModule
    ]
    ```

9. **Uzupełnij plik `navbar.component.html` w katalogu `libs\client\shell\ui\navbar\src\lib\navbar`**

   ```html
    <div class='client-navbar'>
      <ng-container portalTarget='navbar'></ng-container>
    </div>
   ```

10. **Dodaj `SharedPortalModule` do tablicy `imports` modułu `ClientOrdersFeatureOrdersModule` w katalogu `libs\client\orders\feature\orders\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      ClientOrdersUiOrdersFilterModule,
      ClientOrdersUiOrdersListModule,
      SharedPortalModule,
      RouterModule.forChild([
        {
          path: '',
          component: OrdersPageComponent
        }
      ])
    ]
    ```

11. **Zmodyfikuj plik `orders-page.component.html` w katalogu `libs\client\orders\feature\orders\src\lib\orders-page`**

   ```html
   <div class='client-order-page-navbar-wrapper' *portalAttachTo="'navbar'">
   ```

12. **Dodaj `SharedPortalModule` do tablicy `imports` modułu `ClientOrdersFeatureNewOrderModule` w katalogu `libs\client\orders\feature\new-order\src\lib`**

    ```typescript
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SharedPortalModule,
      RouterModule.forChild([
        {
          path: '',
          component: NewOrderPageComponent
        }
      ])
    ]
    ```

13. **Zmodyfikuj plik `new-order-page.component.html` w katalogu `libs\client\orders\feature\new-order\src\lib\new-order-page`**

    ```html
    <h2 class='header h2' *portalAttachTo="'navbar'">Nowe zamówienie</h2>
    ```

14. **Uruchom aplikacje client**

    ```shell
    nx serve client
    ```
<br>

[➡️ Next lab ➡️](./lab_23.md)
