/// <reference types="cypress" />

describe("Planets Screen", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/planets?page=*", { fixture: "planets.json" }).as(
      "getPlanets"
    );
    cy.visit("/");
  });

  it("should display loading state initially", () => {
    cy.contains("Chargement...").should("exist");
  });

  it("should display planets after loading", () => {
    cy.wait("@getPlanets");
    cy.get("p").should("have.length", 10); // Assuming 10 planets in the fixture
  });

  it("should display error message if data fetch fails", () => {
    cy.intercept("GET", "/api/planets?page=*", { statusCode: 500 }).as(
      "getPlanetsError"
    );
    cy.reload();
    cy.wait("@getPlanetsError");
    cy.contains("Failed to fetch data").should("exist");
  });
});
