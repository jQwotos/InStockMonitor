context("Arteryx", () => {
    it("RFD Deal Scan", () => {
        cy.visit("https://forums.redflagdeals.com/search.php?keywords=arcteryx&terms=all&tags_terms=all&author=&fid%5B%5D=9&sc=1&sf=titleonly&sr=topics&ch=300&t=0&submit=Search");

        cy.get('.no_results')
            .should('exist');
    })
})