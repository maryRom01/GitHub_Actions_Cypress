/// <reference types="cypress" />

const baseUrl = Cypress.env("baseUrl");

describe('Test should pass', () => {

    before(() => {
        cy.visit(baseUrl);
    });

    it('should test header title', () => {
        cy.get('#nav-xshop-container').contains('Amazon Basics').should('exist');
    });
});
