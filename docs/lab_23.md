# 💻 Lab 23 - Cypress

## 🏋️‍♀️ Lista kroków:

1. **Uzupełnij plik `app.spec.ts` w katalogu `apps\client-e2e\src\integration`**

    ```typescript
    describe('orders list', () => {
      beforeEach(() => cy.visit('/'));
    
      it('should display loading', () => {
        cy.contains('loading...');
      });
    
      it('should display orders list', () => {
        cy.get('.client-orders-list')
          .children('.order')
          .should('have.length' , 2)
    });
    
    it('should display filtered list', () => {
      cy.get('input').type('ISO');
      cy.get('form').submit();
      cy.get('.client-orders-list')
        .children('.order')
        .should('have.length' , 1)
      });
    
    });
    ```

2. **Uruchom aplikacje api**

    ```shell
    nx serve api
    ```

3. **Uruchom cypress**

    ```shell
    nx e2e client-e2e --watch
    ```
