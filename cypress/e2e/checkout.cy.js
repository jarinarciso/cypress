import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

const checkoutPage = require('../pages/checkout.page');

const validCheckoutDetails = {
    firstName: 'Jari',
    lastName: 'Narciso',
    company: 'Code Square',
    email: 'teste@teste.com',
    country: 'usa',
    city: 'Aland Islands',
    zip: '38444090',
    address: 'Rua João Pessoa',
    notes: 'Checkout de teste',
};

function checkoutWithout(field) {
    const details = { ...validCheckoutDetails };
    delete details[field];
    return details;
}

describe('Checkout', () => {

    before(() => {
        console.log('Testes de checkout iniciado');
    })

    beforeEach(() => {
        cy.viewport(1366, 768);
        console.log('Cenário iniciado');
        cy.login('teste@teste.com', '123456');
        checkoutPage.visit();
    })

    afterEach(() => {
        console.log('Cenário finalizado');
    })

    after(() => {
        console.log('Testes de checkout iniciado finalizado');
    })

    it('1. Checkout com sucesso', () => {
        checkoutPage.fillForm(validCheckoutDetails);
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getOrderSuccessMessage().should('have.text', 'Order success!').should('be.visible');
    });

    it('2. Checkout com primeiro nome vazio', () => {
        checkoutPage.fillForm(checkoutWithout('firstName'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo First Name deve ser prenchido').should('be.visible');
    });

    it('3. Checkout com último nome vazio', () => {
        checkoutPage.fillForm(checkoutWithout('lastName'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Last Name deve ser prenchido').should('be.visible');
    });

    it('4. Checkout com nome da empresa vazio', () => {
        checkoutPage.fillForm(checkoutWithout('company'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Company deve ser prenchido').should('be.visible');
    });

    it('5. Checkout com email vazio', () => {
        checkoutPage.fillForm(checkoutWithout('email'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo E-mail deve ser prenchido ou é inválido').should('be.visible');
    });

    it('6. Checkout sem país selecionado', () => {
        checkoutPage.fillForm(checkoutWithout('country'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Country deve ser prenchido').should('be.visible');
    });

    it('7. Checkout sem cidade selecionada', () => {
        checkoutPage.fillForm(checkoutWithout('city'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo City deve ser prenchido').should('be.visible');
    });

    it('8. Checkout com cep vazio', () => {
        checkoutPage.fillForm(checkoutWithout('zip'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Zip Code deve ser prenchido').should('be.visible');
    });

    it('9. Checkout com endereço vazio', () => {
        checkoutPage.fillForm(checkoutWithout('address'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Address deve ser prenchido').should('be.visible');
    });

    it('10. Checkout com mensagem vazio', () => {
        checkoutPage.fillForm(checkoutWithout('notes'));
        checkoutPage.submitCheckout();
        checkoutPage.confirmOrder();
        checkoutPage.getValidationMessage().should('have.text', 'O campo Additional Notes deve ser prenchido').should('be.visible');
    });

    it('11. Checkout com pagamento pelo PayPal', () => {
        checkoutPage.fillForm(validCheckoutDetails);
        checkoutPage.submitCheckout();
        checkoutPage.selectPayPal();
        checkoutPage.confirmOrder();
        checkoutPage.getOrderSuccessMessage().should('have.text', 'Order success!').should('be.visible');
    });
});
