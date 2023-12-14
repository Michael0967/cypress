Cypress.Commands.add('swiperButtonPrevUpsellSidecart', () => {
    cy.get(Cypress.env('productCartUpsell'))
        .as('product cards upsell')
        .its('length')
        .then(($length) => {
            if ($length > 0) {
                for (let i = 0; i < $length - 1; i++) {
                    cy.get('@isOpenSidecart')
                        .find(Cypress.env('arrows'))
                        .eq(0)
                        .click();
                }
            }
        });
});