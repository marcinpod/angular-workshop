import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
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
