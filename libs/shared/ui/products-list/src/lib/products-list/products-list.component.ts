import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '@angular-workshop/shared/models';

@Component({
  selector: 'shared-ui-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  @Input() products: ProductDto[] = [];

  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
