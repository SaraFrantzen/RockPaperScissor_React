describe("User attempts save data", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/performance_data",
      response: {},
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.visit("/", {
      onBeforeLoad: (computer) => {
        cy.stub(computer.Math, "floor").returns(0);
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
			cy.get("button").contains("Submit").click();
		
  
    });
  });

  it("successfully", () => {
    cy.get("#save-result").click();
    cy.get("#response-message").should("contain", "Your score was saved");
  });

  it("can save two different entries", () => {
		cy.get("button#button-rock").click({force: true});
		cy.get("button#button-play").click();
		cy.get("#save-result").click();
    cy.get("#response-message").should("contain", "Your score was saved");
  });
});
