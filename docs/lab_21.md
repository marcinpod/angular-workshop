# 💻 Lab 21 - nx build, nx affected

## 🏋️‍♀️ Lista kroków:

1. **Uruchom proces budowania aplikacji client**

    ```shell
    nx build client
    ```

2. **Ponownie uruchom proces budowania aplikacji client**

    ```shell
    nx build client
    ```

3. **Zmodyfikuj treść znacznika `button` w komponencie `NewOrderPageComponent` w pliku `new-order-page.component.html` w katalogu `libs\client\orders\feature\new-order\src\lib\new-order-page`**

   ```html
   <button type='submit' class='button submit-button'>Dodaj</button> 
   ```

4. **Uruchom proces budowania aplikacji client**

    ```shell
    nx build client
    ```

5. **Wygeneruj graf zależności**

   ```shell
   nx affected:dep-graph --uncommitted
   ```

6. **Uruchom proces testowania**

    ```shell
    nx affected:test --uncommitted
    ```
