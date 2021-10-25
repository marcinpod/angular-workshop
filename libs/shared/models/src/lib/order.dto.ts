import { ProductDto } from './product.dto';

export interface OrderDto {
  orderNumber: string;
  createdAt: string;
  comment: string;
  products: ProductDto[];
  total: string;
  status: string;
}
