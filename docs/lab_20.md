# 💻 Lab 20 - Graf zależności, tagi

## 🏋️‍♀️ Lista kroków:

1. **Wygeneruj graf zależności**

    ```shell
    nx dep-graph
    ```

2. **Uzupełnij tablicę `tags` w pliku `project.json` w katalogu `apps\client`**

   ```json
   "tags": ["scope:client", "type:app"] 
   ```

3. **Uzupełnij tablicę `tags` w pliku `project.json` w katalogu `libs\client\shell\feature`**

   ```json
   "tags": ["scope:client", "type:shell-lib"]
   ```

4. **Uzupełnij tablicę `tags` w pliku `project.json` w katalogu `libs\shared\models`**

    ```json
    "tags": ["scope:shared", "type:shared-lib"]
    ```

5. **Zmodyfikuj regułę `depConstraints` w pliku `.eslintrc.json`**

    ```json
    "depConstraints": [
      {
        "sourceTag": "scope:client",
        "onlyDependOnLibsWithTags": ["scope:client", "scope:shared"]
      },
      {
        "sourceTag": "type:app",
        "onlyDependOnLibsWithTags": ["type:shell-library"]
      }
    ]
    ```

6. **Sprawdź rezultat polecenia**

    ```shell
    nx lint client
    ```

7. **Uruchom polecenie**

    ```shell
    nx run-many --target=lint --all
    ```
<br>

[➡️ Next lab ➡️](./lab_21.md)
