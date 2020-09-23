describe("User can see the Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("by displaying header", () => {
    cy.get("#header").contains("Rock Paper Scissors");
    cy.get("img#player-img").should("be.visible");
  });

  it("by displaying heading, picture and instructions ", () => {
    cy.get("#lets-play").contains("Rock Paper Scissors");
    cy.get("img.index-img").should("be.visible");
    cy.get("#simple-rules").contains("Rules Are Simple");
    cy.get(".rules").contains("Rock Crushes Scissors");
    cy.get("#choose-weapon").contains("Choose your Weapon and Start the Game!");
  });

  it("by displaying scores", () => {
    cy.get("#userScore").contains("Your Score:");
    cy.get("#computerScore").contains("Computer Score:");
  });

  it("by displaying footer", () => {
    cy.get("#footer").contains("Made by Sara Lundkvist 2020");
  });

});
