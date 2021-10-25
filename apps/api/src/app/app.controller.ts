import { Controller, Get, Query } from '@nestjs/common';

import { OrderDto } from '@angular-workshop/shared/models';

@Controller('orders')
export class AppController {
  private orders: OrderDto[] = [
    {
      orderNumber: 'g2b178zfwdr',
      createdAt: '21.10.2021',
      status: 'dostarczone',
      comment: '-',
      products: [
        {
          name: 'Krzesło konferencyjne',
          price: '96,99 zł',
          imageUrl: 'https://iili.io/5qhfRV.jpg'
        }
      ],
      total: '96,99 zł'
    },
    {
      orderNumber: '6nkb43sqeqd',
      createdAt: '21.10.2021',
      status: 'dostarczone',
      comment: '-',
      products: [
        {
          name: 'Krzesło konferencyjne',
          price: '100 zł',
          imageUrl: 'https://iili.io/5qhfRV.jpg'
        },
        {
          name: 'Krzesło ISO',
          price: '100 zł',
          imageUrl: 'https://iili.io/5qhfRV.jpg'
        }
      ],
      total: '200 zł'
    }
  ];

  constructor() {}

  @Get()
  getOrders(@Query('q') query: string): OrderDto[] {
    return this.orders
      .filter(el => query ? JSON.stringify(el).includes(query) : true)
  }
}
