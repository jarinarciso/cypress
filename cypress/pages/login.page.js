function visit() {
    cy.visit('/login');
}

function fillCredentials(email, password) {
    cy.get('#user').type(email);
    cy.get('#password').type(password);
}

function submit() {
    cy.get('#btnLogin').click();
}

function getSuccessMessage() {
    return cy.get('#swal2-title');
}

function getErrorMessage() {
    return cy.get('span.invalid_input');
}

module.exports = {
    visit,
    fillCredentials,
    submit,
    getSuccessMessage,
    getErrorMessage,
};
