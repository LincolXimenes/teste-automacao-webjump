/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Login', () => {
  it('Login inválido', () => {
    cy.login({ ...testData.user, email: 'naoexiste@example.com', password: 'senhaerrada' })
    cy.contains('The account sign-in was incorrect').should('exist')
  })
})
