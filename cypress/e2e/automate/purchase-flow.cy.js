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
        cy.get(Cypress.env('openSidecart'))
            .as('openSidecart').click({ force: true });

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
    });

    context('Add Products', () => {
        it('Product Page', () => {
            const addProduct = () => {
                cy.visit(Cypress.env('collectionUrl'))
                    .as('collection page');

                cy.get(Cypress.env('productCard'))
                    .as('product card')
                    .then(($productCards) => {
                        const randomIndex = Math.floor(Math.random() * $productCards.length);
                        const randomCard = $productCards[randomIndex]
                        cy.wrap(randomCard).click();
                    });

                cy.get(Cypress.env('productArea'))
                    .as('product area')
                    .find(Cypress.env('addProduct'))
                    .as('add product')
                    .then(($addToCart) => {
                        if (!$addToCart.prop('disabled')) {
                            $addToCart.click();
                            cy.wait(2000)
                        } else {
                            addProduct();
                        }
                    });


                cy.get(Cypress.env('errorStock'))
                    .then(($errorStock) => {
                        if ($errorStock.is(':visible')) {
                            addProduct();
                        }
                    })
            }
            addProduct();
        });
        //it
    });

});