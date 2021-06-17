describe("The Services Page", () => {
  it("I can get to the services page from the home page", () => {
    cy.visit("/");
    cy.get("[data-cy=services-link]").click();
    cy.location("pathname", { timeout: 500 }).should("include", "/services");
  });
  it("The services page contains links, titles and information", () => {
    cy.visit("/services");
    cy.get('[data-cy="page-title"]').contains(/Services/i);
    cy.get("h2").contains(/Web Solution/i);
    cy.get("h2").contains(/Native/i);
    cy.get("h2").contains(/Blockchain/i);
    cy.get("h2").contains(/Testing/i);
    cy.get("h2").contains(/Data/i);
  });
});
