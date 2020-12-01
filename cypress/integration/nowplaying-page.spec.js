let nowplaying;

describe("nowplaying page",() => {
  before(() =>{
    cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          nowplaying = response.results
        })
  })

  beforeEach(() => {
    cy.visit("/");
  });
  describe("page test", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Nowplaying Movies");
      cy.get(".badge").contains(20);
    });

});