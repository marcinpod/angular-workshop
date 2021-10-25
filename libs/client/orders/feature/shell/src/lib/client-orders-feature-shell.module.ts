import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientOrdersFeatureShellRoutingModule } from './client-orders-feature-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClientOrdersEffect, ordersReducer } from '@angular-workshop/client/orders/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClientOrdersFeatureShellRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([ClientOrdersEffect])
  ],
})
export class ClientOrdersFeatureShellModule {}
