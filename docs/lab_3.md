# 💻 Lab 3 - Aplikacja API

## 🏋️‍♀️ Lista kroków:

1. **Zmodyfikuj implementację klasy `AppController` w katalogu `apps/api/src/app`**

   ```typescript
   @Controller('orders')
   export class AppController {
    private orders: OrderDto[] = [];
    
    constructor() {}
    
    @Get()
    getOrders(@Query('q') query: string): OrderDto[] {
    return this.orders
    .filter(el => query ? JSON.stringify(el).includes(query) : true)
    }
   }
   ```

2. **Uzupełnij tablicę orders danymi testowymi**

   <details>
   <summary>Rozwiń</summary>

   ```typescript
   [
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
   ```
   </details> 


3. **Uruchom aplikację i przetestuj jej działanie**

   ```shell
   nx serve api
   ```
