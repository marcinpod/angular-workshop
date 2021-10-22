import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { RouterModule } from '@angular/router';
import { ClientOrdersUiOrdersFilterModule } from '@angular-workshop/client/orders/ui/orders-filter';
import { ClientOrdersUiOrdersListModule } from '@angular-workshop/client/orders/ui/orders-list';

@NgModule({
  imports: [
    CommonModule,
    ClientOrdersUiOrdersFilterModule,
    ClientOrdersUiOrdersListModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersPageComponent
      }
    ])
  ],
  declarations: [
    OrdersPageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ClientOrdersFeatureOrdersModule {}
