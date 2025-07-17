/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Adicionar Produto ao Carrinho', () => {
  it('Adicionar produto válido', () => {
    cy.adicionarProdutoCarrinho(testData.product.name)
    cy.contains('You added').should('exist')
  })
})
