function visit() {
    cy.visit('/register');
}

function fillName(name) {
    cy.get('#user').type(name);
}

function fillEmail(email) {
    cy.get('#email').type(email);
}

function fillPassword(password) {
    cy.get('#password').type(password);
}

function submit() {
    cy.get('#btnRegister').click();
}

function getSuccessMessage() {
    return cy.get('#swal2-title');
}

function getErrorMessage() {
    return cy.get('.errorLabel');
}

module.exports = {
    visit,
    fillName,
    fillEmail,
    fillPassword,
    submit,
    getSuccessMessage,
    getErrorMessage,
};
