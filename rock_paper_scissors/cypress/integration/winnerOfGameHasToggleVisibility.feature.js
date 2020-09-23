describe("visibility of result is toggled", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("by user playing the game", () => {
    cy.get("button#button-rock").click({ force: true });
    cy.get("#result").should("not.be.visible");
    cy.get("button#button-play").click();
    cy.get("#result").should("be.visible");
    cy.get("button#button-paper").click();
    cy.get("#result").should("not.be.visible");
  });
});
