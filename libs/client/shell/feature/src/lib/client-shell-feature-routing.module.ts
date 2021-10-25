import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '@angular-workshop/client/shell/ui/layout';

const routes: Route[] = [
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientShellFeatureRoutingModule {}
