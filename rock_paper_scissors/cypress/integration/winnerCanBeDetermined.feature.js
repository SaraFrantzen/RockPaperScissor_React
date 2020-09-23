
describe('Computer plays rock', () => {
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (computer) => {
          cy.stub(computer.Math, 'floor').returns(0)
        }
      })
    })
    it("user plays rock", () => {
      cy.get('#button-rock').click({force: true})
      cy.get('#button-play').click({force: true})
      cy.get('#result').should('contain', "Tie")
      
    })

    it("user plays paper", () => {
        cy.get('#button-paper').click()
        cy.get('#button-play').click()
        cy.get('#result').should('contain', "You win!")
        
      })

      it("user plays scissor", () => {
        cy.get('#button-scissor').click()
        cy.get('#button-play').click()
        cy.get('#result').should('contain', "Computer wins, try again")
        
        
      })
      
})








