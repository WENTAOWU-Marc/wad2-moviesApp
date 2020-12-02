let nowplaying;

describe("nowplaying page",() => {
  before(() =>{
    cy.request(
        `https://api.themoviedb.org/3/now_playing/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          nowplaying = response.results
        })
  })

  beforeEach(() => {
    cy.visit("/");
  });
  describe("nowplayingpage test", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Nowplaying Movies");
      cy.get(".badge").contains(20);
    });
  })
describe("Filtering", () => {
  describe("By movie title" ,() => {
    it("should display movies with in the title", () => {
      const searchString = ''
      const matchingMovies = filterByTitle(movies, searchString );
      cy.get("input").clear().type(searchString) ;
      cy.get(".card").should("have.length", matchingMovies.length);
      cy.get(".card").each(($card, index) => {
        cy.wrap($card)
        .find(".card-title")
        .should("have.text", matchingMovies[index].title);
      });
    })
})
});
});