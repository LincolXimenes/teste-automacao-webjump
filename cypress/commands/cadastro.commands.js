import { registerElements } from '../elements/cadastro.elements'

Cypress.Commands.add('cadastrarNovoUsuario', (user) => {
  cy.visit('/customer/account/create/')
  cy.get(registerElements.firstName).should('be.visible').type(user.firstName, { force: true })
  cy.get(registerElements.lastName).should('be.visible').type(user.lastName, { force: true })
  cy.get(registerElements.email).first().should('be.visible').type(user.email, { force: true })
  cy.get(registerElements.password).first().should('be.visible').type(user.password, { force: true })
  cy.get(registerElements.passwordConfirmation).first().should('be.visible').type(user.password, { force: true })
  cy.get(registerElements.submit).click()
})
