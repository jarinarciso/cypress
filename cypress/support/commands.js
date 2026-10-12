// Lugar para adicionar comandos customizados do Cypress
// Exemplo: Cypress.Commands.add('login', (user, pass) => { /* ... */ });
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('#user').type(email);
  cy.get('#password').type(password);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').should('have.text', 'Login realizado');
});
