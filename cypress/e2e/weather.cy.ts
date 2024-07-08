describe("weather app", () => {
  it("show validation errors", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy=submit]").click();
  });
  it("show loading spinner", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy=input]").type("London");
    cy.get("[data-cy=submit]").click();
    cy.get(".loading").should("exist");
  });
  it("show weather data", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy=input]").type("London");
    cy.get("[data-cy=submit]").click();
    cy.get(".weather-box").should("exist");
  });
  it("error message for invalid city", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy=input]").type("Lo");
    cy.get("[data-cy=submit]").click();
    cy.get(".go2072408551")
      .children()
      .eq(1)
      .should("have.text", "Please enter a valid city.");
  });
});
