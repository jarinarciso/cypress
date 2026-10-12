/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport(1366, 768)
})

describe('Comandos Básicos', () => {
    it('Acessar uma URL', () => {
        cy.visit('https://www.automationpratice.com.br/login');
    });

    it('Encontrar um elemento', () => {
        cy.visit('https://www.automationpratice.com.br/login');
        cy.get('#user'); // usa-se "#" quando identifica um elemento pelo id, se for class usa-se "." e se for tag não precisa de nada. 
        //cy.get('.default-form-box').find('#user'); // findById é um comando do cypress que encontra um elemento pelo id, mas não é tão usado quanto o cy.get.
        //cy.get('.login_submit').contains('login');
    });

    it('Preencher um campo', () => {
        cy.visit('https://www.automationpratice.com.br/login');
        cy.get('#user').type('jari.almeida@gmail.com');
        cy.get('#password').type('123456');
    });

    it('Click', () => {
        cy.visit('https://www.automationpratice.com.br/login');
        cy.get('#user').type('jari.almeida@gmail.com');
        cy.get('#password').type('12345');
        cy.get('#btnLogin').click();
    });

    it('Select/Dropdown', () => {
        cy.visit('https://www.automationpratice.com.br/checkout-one');
        cy.get('#country').select('usa');
    });

    it('Checkbox/Radio', () => {
        cy.visit('https://www.automationpratice.com.br/checkout-one');
        cy.get('#accordionExample').check('paypal');
    });

    it.only('Validar um elemento', () => {
        cy.visit('https://www.automationpratice.com.br/login');
        cy.get('#user').type('jari.almeida@gmail.com');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado');
    });
})