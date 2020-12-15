let movies;    // List of movies from TMDB
let nickname = "Marc";
let email = "872257263@qq.com";
let wrongemail = "123@qq.com";
let password = "123321";

describe ("Authorization Page", () =>{
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
          )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
              movies = response.results
            })
    });

    beforeEach(() => {
      cy.visit("./");
    });
    
    describe("Sign up Test",() => {
      it("should display sign up page", () => {
        cy.get("nav").find("nav").eq(2).click();
        cy.wait(2000);
        cy.get(".signup").click();
        // cy.get("h1").should("have.text","Sign up");
      });
      it("should not sign up with an existing account", () =>{
        cy.get("nav").find("nav").eq(2).click();
        cy.wait(2000);
        cy.get(".signup").wait(1000).click();
        // cy.wait(3000);
        // cy.get("input").eq(0).type(nickname);
        // cy.get("input").eq(1).type(email);
        // cy.get("input").eq(2).type(password);
        // cy.wait(1000);
        // cy.get("button").eq(3).click();
        // cy.wait(2000);
        // cy.get("h4").should("have.text","The email address is already in use by another account.");
      });
});
    describe("Login Test",() =>{
      it("can't login with an illegal account", () =>{
        cy.wait(3000);
        cy.get("nav").find("nav").eq(2).click();
        cy.wait(2000);
        cy.get("input").eq(0).type(wrongemail);
        cy.get("input").eq(1).type(password);
        cy.get("button").eq(3).click();
        cy.wait(1000);
        cy.get("h4").should("have.text","There is no user record corresponding to this identifier. The user may have been deleted.");
      });
      it("login with a legal account", () => {
        cy.get("nav").find("nav").eq(2).click();
        cy.get("input").eq(0).type(email);
        cy.get("input").eq(1).type(password);
        cy.get("button").eq(3).click();
        cy.wait(3000);
        cy.get("nav").find("nav").eq(2).click();
        cy.get("h2").eq(0).should("have.text",email);
        cy.get("h2").eq(1).should("have.text",nickname);
    });
    
  });
    describe("Logout Test",() =>{
      it("can logout when user has loged in", () =>{
        cy.wait(1000);
        cy.get("nav").find("nav").eq(2).click();
        cy.wait(2000);
        cy.get("button").eq(3).click();
        cy.get("h2").contains("No. Movies");
        cy.get(".badge").contains(20);
      });
  });
 });