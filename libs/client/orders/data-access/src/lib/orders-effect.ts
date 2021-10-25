import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  getOrdersAction,
  getOrdersFailureAction,
  getOrdersSuccessAction
} from '@angular-workshop/client/orders/data-access';
import { catchError, delay, switchMap } from 'rxjs/operators';
import { OrderDto } from '@angular-workshop/shared/models';
import { of } from 'rxjs';

@Injectable()
export class ClientOrdersEffect {

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }

  getOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrdersAction),
      switchMap(({searchQuery}) => this.httpClient.get<OrderDto[]>('api/orders', { params: this.getParams(searchQuery) })
        .pipe(
          delay(300),
          switchMap((orders) => of(getOrdersSuccessAction( { orders } ))),
          catchError(() => of(getOrdersFailureAction({ error: 'something went wrong' })))
        )
      )
    )
  );

  private getParams(query: string | null): HttpParams {
    const params = new HttpParams();
    return query ? params.append('q', query) : params
  }

}
