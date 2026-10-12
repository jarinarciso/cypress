const fields = {
    firstName: { selector: '#fname' },
    lastName: { selector: '#lname' },
    company: { selector: '#cname' },
    email: { selector: '#email' },
    country: { selector: '#country', select: true },
    city: { selector: '#city', select: true },
    zip: { selector: '#zip' },
    address: { selector: '#faddress' },
    notes: { selector: '#messages' },
};

function visit() {
    cy.visit('/checkout-one');
}

function fillForm(details) {
    Object.entries(fields).forEach(([field, { selector, select }]) => {
        const value = details[field];

        if (value === undefined) {
            return;
        }

        if (select) {
            cy.get(selector).select(value);
        } else {
            cy.get(selector).type(value);
        }
    });
}

function submitCheckout() {
    cy.get('.checkout-area-bg > .theme-btn-one').click();
}

function selectPayPal() {
    cy.get('#headingThree > .collapsed > label').click();
}

function confirmOrder() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click();
}

function getOrderSuccessMessage() {
    return cy.get('h2');
}

function getValidationMessage() {
    return cy.get('#errorMessageFirstName');
}

module.exports = {
    visit,
    fillForm,
    submitCheckout,
    selectPayPal,
    confirmOrder,
    getOrderSuccessMessage,
    getValidationMessage,
};
