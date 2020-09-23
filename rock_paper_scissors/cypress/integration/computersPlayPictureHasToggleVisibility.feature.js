describe('visibility of computers play pictute is toggled', () => {
 beforeEach(() => {
     cy.visit("/")
 })

 it ('by user playing rock', () => {
     cy.get('button#button-rock').click({force: true})
     cy.get('#computerPlayImg').should('not.be.visible')
     cy.get('button#button-play').click()
     cy.get('img#player-img').should('be.visible')
  
 })



 it ('by user playing paper', () => {
    cy.get('button#button-paper').click()
    cy.get('#computerPlayImg').should('not.be.visible')
    cy.get('button#button-play').click()
    cy.get('img#player-img').should('be.visible')
 
})
it ('by user playing scissor', () => {
    cy.get('button#button-scissor').click()
    cy.get('#computerPlayImg').should('not.be.visible')
    cy.get('button#button-play').click()
    cy.get('img#player-img').should('be.visible')

})
})