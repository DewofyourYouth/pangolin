const url = "https://pangolinsoftwaresystems.com";

describe("Homepage", () => {
  it("the homepage contains title and links", () => {
    cy.visit("/");
    cy.get("[data-cy=site-title]").contains(/PANGOLIN SOFTWARE SOLUTIONS/i);
    cy.get("[data-cy=home-link]");
    cy.get("[data-cy=services-link]");
  });
});
