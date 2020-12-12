let nowplaying;

const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

describe("nowplaying page",() => {
  before(() =>{
    cy.request(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          nowplaying = response.results
        })
  })

  beforeEach(() => {
    cy.wait(5000)
    cy.visit("/");
    cy.wait(5000)
    cy.get("nav").find("nav").find("Button").eq(0).click();
    cy.contains("Nowplaying").click();
  });
  describe("nowplayingpage test", () => {
    it("displays page header", () => {
      cy.get("h2").contains("No. NowplayingMovies");
      cy.get(".badge").contains(20);
    });
  })
describe("Filtering", () => {
  describe("By movie title" ,() => {
    it("should display movies with in the title", () => {
      const searchString = 'fat'
      const matchingMovies = filterByTitle(nowplaying, searchString );
      cy.get("input").clear().type(searchString) ;
      cy.get(".card").should("have.length", matchingMovies.length);
      cy.get(".card").each(($card, index) => {
        cy.wrap($card)
        .find(".card-title")
        .should("have.text", matchingMovies[index].title);
      });
    });
    it("should throw a exception", () => {
  const searchString = "xyz";
  const matchingMovies = filterByTitle(nowplaying, searchString);
  cy.get("input").clear().type(searchString);
  cy.get(".card").should("have.length", matchingMovies.length);
});
});
});
describe("Button",() =>{
it("add nowplaying movies" , () => {
  cy.get(".card").eq(0).find("button").click();
  cy.get("nav").find("nav").find("Button").eq(2).click();
  cy.contains("WatchList").click();
  cy.get("h2").contains("Watch List Movies");
  cy.get(".card").each(($card) => {
    cy.wrap($card)
    .find(".card-title")
    .should("have.text", "Jiu Jitsu");
  });
})
});
});