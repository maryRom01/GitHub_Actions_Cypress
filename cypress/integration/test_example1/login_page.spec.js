/// <reference types="cypress" />

const baseUrl = Cypress.env("baseUrl");

describe('Test should pass', () => {

    before(() => {
        cy.visit(baseUrl);
    });

    it('should click Login', () => {
        cy.get('#nav-belt > .nav-right').contains('Hello, Sign in').should('exist').click();
        cy.get('form[name=\'signIn\']').should('exist');
    });
});