import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientStateModel, OrderDto, OrdersFilterModel } from '@angular-workshop/shared/models';
import { select, Store } from '@ngrx/store';
import {
  getOrdersAction,
  isLoadingSelector,
  ordersSelector,
  searchQuerySelector
} from '@angular-workshop/client/orders/data-access';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'angular-workshop-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  isLoading$: Observable<boolean>;
  orders$: Observable<OrderDto[]>;
  searchQuery$: Observable<string>;

  constructor(private store: Store<ClientStateModel>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.orders$ = this.store.pipe(select(ordersSelector))
    this.searchQuery$ = this.store.pipe(select(searchQuerySelector))
      .pipe(
        take(1),
        tap(searchQuery => this.store.dispatch(getOrdersAction({ searchQuery })))
      );
  }

  handleFilters(event: OrdersFilterModel): void {
    this.store.dispatch(getOrdersAction({ searchQuery: event.searchQuery }));
  }

}
