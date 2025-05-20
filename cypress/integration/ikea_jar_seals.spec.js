context('Ikea', () => {
    it('Jar Seals', () => {
        cy.visit("https://api.prod.apo.ingka.com/search/10107965");

        cy.get('body').should('have.text', '[{"itemId":"10107965","partName":"Gasket Ø95x3 White","partDescription":"white","categoryId":"P4101","subCategoryId":"41107","stock":0,"status":"OUT_OF_STOCK","partColor":"","partReplaceId":""}]');
    });
});