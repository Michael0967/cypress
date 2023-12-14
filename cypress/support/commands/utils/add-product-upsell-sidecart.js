Cypress.Commands.add('addProductUpsellSidecart', () => {
    cy.get(Cypress.env('productCartUpsell'))
        .as('upsell product cards')
        .eq(0)
        .find(Cypress.env('btnAddProduct'))
        .as('add product')
        .click()
    cy.wait(2000);
})