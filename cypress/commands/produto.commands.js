import { ProdutoElements } from '../elements/produto.elements'
const elements = new ProdutoElements()

Cypress.Commands.add('adicionarProdutoCarrinho', (productName) => {
  cy.visit('/')
  cy.get(elements.searchInput()).type(productName + '{enter}')
  cy.contains(elements.productLink(), productName).click()
  cy.wait(800)
  cy.get(elements.addToCart()).should('not.be.disabled').click()
})

Cypress.Commands.add('finalizarCompra', () => {
  cy.get(productElements.cartIcon).click()
  cy.contains('Proceed to Checkout').click()  
})
