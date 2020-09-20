describe('visibility of winner is toggled', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it ('by user playing the game', () => {
        cy.get('button#button-rock').click()
        cy.get('#winner').should('not.be.visible')
        cy.get('button#button-play').click()
        cy.get('#winner').should('be.visible')
        cy.get('button#button-paper').click()
        cy.get('#winner').should('not.be.visible')
    })
})