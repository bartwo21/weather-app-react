import App from "../../src/App";

describe("weatherapp.cy.tsx", () => {
  it("check everything is working ", () => {
    cy.mount(<App />);
    cy.get("input[type='text']").should("have.value", "");
    cy.get("[data-cy='suggestion-list']").should("not.exist");
  });
  it("check submit button", () => {
    cy.mount(<App />);
    cy.get("input[type='text']").type("London");
    cy.get("button").click();
  });
  it("check if the input is empty", () => {
    cy.mount(<App />);
    cy.get("button").click();
    cy.get("[data-cy='suggestion-list']").should("not.exist");
  });
  it("check api call", () => {
    cy.intercept(
      "GET",
      "https://api.weatherapi.com/v1/current.json?key=3880adeae7cd4b6489c220039230306&q=London"
    ).as("weather");
    cy.mount(<App />);
    cy.get("input[type='text']").type("London");
    cy.get("button").click();
    cy.wait("@weather").its("response.statusCode").should("eq", 200);
  });
});
