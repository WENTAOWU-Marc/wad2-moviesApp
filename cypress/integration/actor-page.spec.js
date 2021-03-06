let actor;
let actorId = null;

describe("Actor Page", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            return response.results[2].id;
          })
          .then((arbitraryActorIdignored) => {
            actorId = arbitraryActorIdignored
            return cy
              .request(
                `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
                  "TMDB_KEY"
                )}`
              )
              .its("body");
          })
          .then((actorDetails) => {
            actor = actorDetails;
            return actorDetails.id;
          })
      });
      
    beforeEach(() => {
        cy.visit("./");
      });
 
    describe("Actor page test",() => {
        it("displays page header", () => {
          cy.wait(1000);
          cy.get("nav").find("nav").find("Button").eq(1).trigger('mouseover');
          cy.wait(3000);
          cy.contains("ActorPage").click();
          cy.get("h2").contains("No. Actors");
          cy.get(".badge").contains(20);
        });
    });

    describe("Actor detail page test",() => {
      it("displays the correct details", () => {
        cy.wait(1000);
        cy.get("nav").find("nav").find("Button").eq(1).trigger('mouseover');
        cy.contains("ActorPage").click();
        cy.wait(3000);
        cy.get(".card").eq(2).find("img").click();
        cy.get("h2").contains(actor.name);
        cy.get("h4").contains("Biography");
      });
    }); 

    describe("Actor Combined Credits test",() =>{
       it("should display actor's combined credits", () =>{
        cy.wait(1000);
        cy.get("nav").find("nav").find("Button").eq(1).trigger('mouseover');
        cy.wait(1000);
        cy.contains("ActorPage").click();
        cy.get(".card").eq(0).find("a.btn").click();
        cy.get("h2").contains("Combined Credits");
       });
    });
});