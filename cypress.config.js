const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Padrão simples para localizar os arquivos de teste
    specPattern: 'cypress/e2e/**/*.cy.js',
    // Arquivo de suporte carregado antes de cada spec
    supportFile: 'cypress/support/e2e.js',
    // Pasta de fixtures
    fixturesFolder: 'cypress/fixtures',

    baseUrl: 'https://www.automationpratice.com.br',
  }
})