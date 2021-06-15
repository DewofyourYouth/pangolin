const url = "https://pangolinsoftwaresystems.com";

it("I go to the homepage", () => {
  cy.visit(url);
  cy.get("h1").contains("PANGOLIN SOFTWARE SOLUTIONS");
});
