describe('Purchase Flow', () => {
    /* 
    * Setup before each test
    * If the site does not have a password, comment out the following command
    *   cy.get(inputPassword)
    **/
    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.visit('/');
        cy.get(Cypress.env('inputPassword'), { log: false })
            .type(Cypress.env('unlockTheme'), { delay: 100, log: false })
            .type('{enter}');
    });

    it('open & close sidecart', () => {
        cy.openCloseSidecart();
    });

    it('Swiper button next and prev', () => {
        cy.onlyOpenSidecart();
        cy.swiperButtonNextUpsellSidecart();
        cy.swiperButtonPrevUpsellSidecart();
    });

    context('Add products', () => {

        it('Product page', () => {
            cy.addProductPage();
        });

        it('Collections page', () => {
            cy.addProductCollection();
        });

        it('Upsell', () => {
            cy.onlyOpenSidecart();
            cy.addProductUpsellSidecart();
        })

        it.only('Verify items', () => {
            cy.addProductPage();
            cy.productDetails();
        });

    });

});
