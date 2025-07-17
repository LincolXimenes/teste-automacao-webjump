/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Adicionar produto ao carrinho pela página do produto', () => {
  it('Adicionar produto válido pela página do produto', () => {
    cy.adicionarProdutoCarrinho(testData.product.name)
    cy.contains('You added').should('exist')
  })
})
