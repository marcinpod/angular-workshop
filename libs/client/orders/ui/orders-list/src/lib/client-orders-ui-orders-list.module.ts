import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SharedUiProductsListModule } from '@angular-workshop/shared/ui/products-list';

@NgModule({
  imports: [
    CommonModule,
    SharedUiProductsListModule
  ],
  declarations: [
    OrdersListComponent
  ],
  exports: [
    OrdersListComponent
  ],
})
export class ClientOrdersUiOrdersListModule {}
