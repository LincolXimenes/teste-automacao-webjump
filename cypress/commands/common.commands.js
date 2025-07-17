Cypress.Commands.add('esperarCarregamento', () => {  
  cy.get('.loading-mask').should('not.exist')
})

Cypress.Commands.add('limparCarrinho', () => {
  cy.visit('/checkout/cart/')
  cy.get('body').then($body => {
    if ($body.find('.action.delete').length > 0) {
      cy.get('.action.delete').each($btn => {
        cy.wrap($btn).click({ force: true })
        cy.wait(500)
      })
    }
  })
})


