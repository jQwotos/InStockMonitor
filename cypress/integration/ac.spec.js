context("AirConditioners", () => {
    it("Costco Danby 14,000 BTU AC", () => {
        cy.on('uncaught:exception', (e) => {
            return false;
        })

        cy.visit("https://www.costco.ca/danby-14%2c000-btu-ultra-quiet-portable-air-conditioner-with-voice-control-and-rapid-cooling.product.100715465.html");
        cy.get('#region-radio-buttons > .row > :nth-child(1) > :nth-child(2)')
            .click();

        cy.get('#language-region-set')
            .click();

        cy.get('#add-to-cart-btn')
            .invoke('attr', 'disabled')
            .should('eq', 'disabled');
    });
})