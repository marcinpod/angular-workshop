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
