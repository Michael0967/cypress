Cypress.Commands.add('addProductCollection', () => {
    const addProduct = () => {
        cy.visit(Cypress.env('collectionUrl'))
            .as('collection page');

        cy.get(Cypress.env('productCard'))
            .as('product card')
            .then(($productCards) => {
                const randomIndex = Math.floor(Math.random() * $productCards.length);
                const randomCard = $productCards[randomIndex]

                cy.wrap(randomCard)
                    .find(Cypress.env('btnAddProduct'))
                    .as('add product')
                    .then(($addToCart) => {
                        if (!$addToCart.prop('disabled')) {
                            $addToCart.click();
                            cy.wait(2000)
                        } else {
                            addProduct();
                        }
                    });
            });

        cy.get(Cypress.env('errorStock'))
            .as('product out of stock')
            .then(($errorStock) => {
                if ($errorStock.is(':visible')) {
                    addProduct();
                }
            })
    };
    addProduct();
})