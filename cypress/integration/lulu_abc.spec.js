context('Lululemon', () => {
    it (`ABC Pant Slim 32" Warpstreme Size 29`, () => {
        cy.visit("https://shop.lululemon.com/p/men-pants/Abc-Slim-5-Pocket-32/_/prod9400145?color=0001&sz=29&ta=1&tasid=ts7uFdGe8S");

        cy.get('#purchase-attributes-size-notification-error')
            .should('exist');
    })
})