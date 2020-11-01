describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    //modify test case
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Discover Movies");
        cy.get(".badge").contains(20);
      });
    })
  })