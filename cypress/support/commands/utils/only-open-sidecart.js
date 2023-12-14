Cypress.Commands.add('onlyOpenSidecart', () => {
    cy.get(Cypress.env('openSidecart'))
        .as('openSidecart')
        .click({ force: true });

    cy.get(Cypress.env('isOpenSidecart'))
        .as('isOpenSidecart')
        .should('be.visible');
    cy.wait(2000);
})