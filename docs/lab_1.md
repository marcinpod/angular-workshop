# 💻 Lab 1 - Konfiguracja obszaru roboczego, utworzenie aplikacji

## 🏋️‍♀️ Lista kroków:

1. **Utwórz pusty obszar roboczy Nx**

   ```shell
   npx create-nx-workspace angular-workshop --preset=empty --no-nx-cloud
   ```

2. **Zainstaluj Nx CLI**

   ```shell
   npm install -g nx
   ```

3. **Sprawdź listę zainstalowanych i dostępnych wtyczek**

   ```shell
   nx list
   ```

4. **Dodaj wtyczkę NestJs i Angular do obszaru roboczego**

   ```shell
   npm install -D @nrwl/nest @nrwl/angular
   ```

6. **Użyj wtyczki `@nrwl/nest` do wygenerowania aplikacji NestJs**

   ```shell
   nx g @nrwl/nest:application api
   ```

7. **Użyj wtyczki `@nrwl/angular` do wygenerowania aplikacji Angular**

   ```shell
   nx g @nrwl/angular:application client --strict=false --routing=false --style=scss --backendProject=api
   ```
<br>

[➡️ Next lab ➡️](./lab_2.md)
