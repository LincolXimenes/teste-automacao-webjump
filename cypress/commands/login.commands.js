import { LoginElements } from '../elements/login.elements'
const elements = new LoginElements()

Cypress.Commands.add('loginUsuario', (user) => {
  cy.visit('/customer/account/login/')
  cy.get(elements.email()).should('be.visible').type(user.email, { force: true })
  cy.get(elements.password()).should('be.visible').type(user.password, { force: true })
  cy.get(elements.submit()).click()
})
