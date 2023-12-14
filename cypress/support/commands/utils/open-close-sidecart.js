Cypress.Commands.add('openCloseSidecart', () => {
    cy.get(Cypress.env('openSidecart'))
        .as('openSidecart')
        .click({ force: true });

    cy.get(Cypress.env('isOpenSidecart'))
        .as('isOpenSidecart')
        .should('be.visible')
        .then(($isOpenSidecart) => {
            if ($isOpenSidecart.is(':visible')) {
                cy.get(Cypress.env('closeSidecart'))
                    .as('closeSidecart')
                    .click({ force: true });
            } else {
                throw new Error('The sidecart is not open');
            }
        });
})