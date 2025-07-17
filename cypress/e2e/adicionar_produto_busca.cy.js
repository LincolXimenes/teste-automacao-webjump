/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Adicionar produto ao carrinho pela busca', () => {
  it('Adicionar produto válido pela busca', () => {
    cy.adicionarProdutoCarrinho(testData.product.name)
    cy.contains('You added').should('exist')
  })
})
