import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

const registrationPage = require('../pages/registration.page');

describe('Cadastro de Usuário', () => {

    before(() => {
        console.log('Testes de cadastro de usuário iniciado');
    })

    beforeEach(() => {
        cy.viewport(1366, 768);
        console.log('Cenário iniciado');
        registrationPage.visit();
    })

    afterEach(() => {
        console.log('Cenário finalizado');
    })

    after(() => {
        console.log('Testes de cadastro de usuário iniciado finalizado');
    })

    it('1. Cadastro de usuário com sucesso', () => {
        registrationPage.fillName(faker.person.firstName());
        registrationPage.fillEmail(faker.internet.email());
        registrationPage.fillPassword(faker.internet.password(8));
        registrationPage.submit();
        registrationPage.getSuccessMessage().should('have.text', 'Cadastro realizado!').should('be.visible');
    });

    it('2. Cadastro de usuário sem nome', () => {
        registrationPage.fillEmail(faker.internet.email());
        registrationPage.fillPassword(faker.internet.password(8));
        registrationPage.submit();
        registrationPage.getErrorMessage().should('have.text', 'O campo nome deve ser prenchido').should('be.visible');
    });

    it('3. Cadastro de usuário com email inválido', () => {
        registrationPage.fillName(faker.person.firstName());
        registrationPage.fillPassword(faker.internet.password(8));
        registrationPage.submit();
        registrationPage.getErrorMessage().should('have.text', 'O campo e-mail deve ser prenchido corretamente').should('be.visible');
    });

    it.only('4. Cadastro de usuário com senha inválida', () => {
        registrationPage.fillName(faker.person.firstName());
        registrationPage.fillEmail(faker.internet.email());
        registrationPage.fillPassword(faker.internet.password({ length: 4 }));
        registrationPage.submit();
        registrationPage.getErrorMessage().should('have.text', 'O campo senha deve ter pelo menos 6 dígitos').should('be.visible');
    });
});
