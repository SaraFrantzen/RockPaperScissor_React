
describe('Computer plays rock', () => {
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (computer) => {
          cy.stub(computer.Math, 'floor').returns(0)
        }
      })
    })
    it("user plays rock", () => {
      cy.get('button#button-rock').click()
      cy.get('button#button-play').click()
      cy.get('#winner').should('contain', "Tie")
      
    })

    it("user plays paper", () => {
        cy.get('button#button-paper').click()
        cy.get('button#button-play').click()
        cy.get('#winner').should('contain', "You win!")
        
      })

      it("user plays scissor", () => {
        cy.get('button#button-scissor').click()
        cy.get('button#button-play').click()
        cy.get('#winner').should('contain', "Computer wins, try again")
        debugger;
        
      })
      
})








