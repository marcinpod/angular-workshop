import { OrderDto } from '@angular-workshop/shared/models';

export interface ClientOrdersStateModel {
  isLoading: boolean,
  searchQuery: string,
  orders: OrderDto[],
  error: string;
}
