import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderPageComponent } from './new-order-page/new-order-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedPortalModule } from '@angular-workshop/shared/portal';

@NgModule({
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
  ],
  declarations: [
    NewOrderPageComponent
  ],
  exports: [RouterModule]
})
export class ClientOrdersFeatureNewOrderModule {}
