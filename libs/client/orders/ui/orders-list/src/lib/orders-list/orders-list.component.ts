import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { OrderDto } from '@angular-workshop/shared/models';

@Component({
  selector: 'client-orders-ui-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent implements OnInit {

  @Input() orders: OrderDto[] = [];

  constructor() { }

  ngOnInit(): void {}

}
