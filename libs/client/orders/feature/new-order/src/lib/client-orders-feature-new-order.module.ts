import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderPageComponent } from './new-order-page/new-order-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewOrderPageComponent
      }
    ])
  ],
  declarations: [
    NewOrderPageComponent
  ],
  exports: [RouterModule]
})
export class ClientOrdersFeatureNewOrderModule {}
