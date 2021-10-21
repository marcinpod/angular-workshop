# 💻 Lab 2 - Biblioteka shared-models

## 🏋️‍♀️ Lista kroków:

1. **Utwórz bibliotekę shared-models**

   ```shell
   nx g @nrwl/workspace:library models --directory=shared --unitTestRunner=none
   ```

2. **Utwórz plik `product.dto.ts` w katalogu `libs/shared/models/src/lib`**

   ```typescript
   export interface ProductDto {
      name: string;
      price: string;
      imageUrl: string;
   }
   ```

3. **Utwórz plik `order.dto.ts` w katalogu `libs/shared/models/src/lib`**

   ```typescript
   export interface OrderDto {
     orderNumber: string;
     createdAt: string;
     comment: string;
     products: ProductDto[];
     total: string;
     status: string;
   }
   ```

4. **Zmodyfikuj plik `index.ts` w katalogu `libs/shared/models/src`**

   ```typescript
   export * from './lib/product.dto';
   export * from './lib/order.dto';
   ```
