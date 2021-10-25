import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientOrdersFeatureShellRoutingModule {}
