describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/');
    cy.get('h1').should('be.visible');
  });

  it('has navigation links', () => {
    cy.get('nav').should('be.visible');
    cy.get('nav a').should('have.length.greaterThan', 0);
  });

  it('displays hero section', () => {
    cy.get('section#hero').should('be.visible');
    cy.contains('Muhammad Syahril').should('be.visible');
  });

  it('has certificate tabs', () => {
    cy.get('section#certificates').should('exist');
    cy.get('button').contains('All').should('be.visible');
  });
});