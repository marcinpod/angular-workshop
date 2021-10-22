import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersFilterComponent } from './orders-filter/orders-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrdersFilterComponent
  ],
  exports: [
    OrdersFilterComponent
  ],
})
export class ClientOrdersUiOrdersFilterModule {}
