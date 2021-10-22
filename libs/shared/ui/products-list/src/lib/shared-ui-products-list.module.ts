import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductsListComponent
  ],
  exports: [
    ProductsListComponent
  ],
})
export class SharedUiProductsListModule {}
