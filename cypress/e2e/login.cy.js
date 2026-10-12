import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

const loginPage = require('../pages/login.page');

before(() => {
  cy.viewport(1366, 768);
  console.log('Testes de login iniciado');
})

beforeEach(() => {
  console.log('Cenário iniciado');
  loginPage.visit();
})

afterEach(() => {
  console.log('Cenário finalizado');
})

after(() => {
  console.log('Testes de login finalizado');
})

describe('Login', () => {

  it('1. Login com sucesso', () => {
    loginPage.fillCredentials('teste@teste.com', '123456');
    loginPage.submit();
    loginPage.getSuccessMessage().should('have.text', 'Login realizado');
  });

  it('2. Login com senha inválida', () => {
    loginPage.fillCredentials('teste@teste.com', '1234');
    loginPage.submit();
    loginPage.getErrorMessage().should('have.text', 'Senha inválida.').should('be.visible');
  });

  it('3. Login com email inválido', () => {
    loginPage.fillCredentials('teste', '123456');
    loginPage.submit();
    loginPage.getErrorMessage().should('have.text', 'E-mail inválido.');
  });

});
