context("Carleton Uni Course Outlines", () => {
    it("Physics Department Summer Courses", () => {
        cy.visit("https://physics.carleton.ca/current-undergraduate-students/course-outlines");

        // Check to see if summer 2021 exists in content
        cy.get('#content')
            .contains("Summer 2021", { matchCase: false })
            .should("not.exist");
    })
})