describe ('Rock Paper Scissors', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
    it ('returns a winner when user play rock', () => {
        cy.get('button#rock').click();
        cy.get('p#result').should('contain', {Results})
    })

    it ('returns a winner when user play paper', () => {
        cy.get('button#paper').click();
        cy.get('p#result').should('contain', {Results})
    })

    it ('returns a winner when user play scissors', () => {
        cy.get('button#scissors').click();
        cy.get('p#result').should('contain', {Results})
    })
})








