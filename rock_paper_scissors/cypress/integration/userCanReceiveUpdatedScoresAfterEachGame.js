describe("Scoreboard is updated if it is not a tie", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (computer) => {
        cy.stub(computer.Math, "floor").returns(0);
      },
    });
  });

  it("user wins", () => {
    cy.get("button#button-paper").click();
    cy.get("button#button-play").click();
    cy.get("div#userScore").contains("Your Score: 1");
  });

  it("computer wins", () => {
    cy.get("button#button-scissor").click();
    cy.get("button#button-play").click();
    cy.get("div#computerScore").contains("Computer Score: 1");
  });

  it("is not updated when it is a tie", () => {
    cy.get("button#button-rock").click({ force: true });
    cy.get("button#button-play").click();
    cy.get("div#computerScore").contains("Computer Score: 0");
    cy.get("div#userScore").contains("Your Score: 0");
  });
});
