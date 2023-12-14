Cypress.Commands.add('productDetails', () => {
    cy.get(Cypress.env('detailProduct'))
        .as('detail product')
        .within(() => {

            cy.get(Cypress.env('productImgSidecart'))
                .as('image')
                .should('exist')
                .should(($img) => {
                    const src = $img.attr("src");
                    cy.expect(src).to.match(/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/);
                });

            cy.get(Cypress.env("productTitleSidecart"))
                .as('title')
                .should('exist')
                .should('not.be.empty');

            cy.get(Cypress.env('productPriceSidecart'))
                .as('price')
                .should("exist");

            cy.get(Cypress.env('productIconDelete'))
                .as('icon delete')
                .should("exist");
        });
})