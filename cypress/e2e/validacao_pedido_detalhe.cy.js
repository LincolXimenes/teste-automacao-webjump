/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Validação de pedido - Detalhe', () => {
  it('Verificar detalhes do pedido', () => {
    cy.login(testData.user)
    cy.visit('/sales/order/history/')    
    cy.get('td[data-th="Order #"]').first().invoke('text').then(orderNumber => {      
      cy.contains('tr', orderNumber.trim()).within(() => {
        cy.contains('span', 'View Order').parent('a,button').click({ force: true })
      })
      cy.wait(2000)      
      cy.get('span.base[data-ui-id="page-title-wrapper"]').should('contain', orderNumber.trim())
    })
  })
})
