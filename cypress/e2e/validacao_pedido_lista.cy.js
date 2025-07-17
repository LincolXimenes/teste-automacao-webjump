/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Validação de pedido - Lista', () => {
  it('Deve exibir todos os pedidos na lista', () => {
    cy.login(testData.user)
    cy.visit('/sales/order/history/')    
    cy.get('table').should('be.visible')    
    cy.get('td[data-th="Order #"]').should('have.length.greaterThan', 0)    
    cy.get('tbody tr').each($row => {
      cy.wrap($row).within(() => {
        cy.get('td[data-th="Order #"]').should('be.visible')
        cy.get('td[data-th="Date"]').should('be.visible')
        cy.get('td[data-th="Order Total"]').should('be.visible')
        cy.get('td[data-th="Status"]').should('be.visible')
      })
    })
  })
})
