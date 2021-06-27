context('Aritzia', () => {
    it.skip('Raindrop Jacket Low stock Warning', () => {
        cy.visit("https://www.aritzia.com/en/product/raindrop-jacket/64047.html?dwvar_64047_color=18287");

        // If the country selector pops up, select Canada
        // Conditional Getting from https://docs.cypress.io/guides/core-concepts/conditional-testing#Element-existence
        cy.get('body')
            .then(($body) => {
                if ($body.find('.js-close').length) {
                    cy.get('.js-close')
                        .click();
                }
            });

        // Select the xtra small size
        cy.get(':nth-child(2) > .sizeanchor > span')
            .click();

        // Fail if it's out of stock
        cy.get('.ar-product__size-error')
            .should('have.css', 'display', 'none');

        // Fail if it's sold out
        cy.get('.js-product__soldout-error')
            .should('have.css', 'display', 'none');
    });
})