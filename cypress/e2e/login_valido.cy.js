/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Login', () => {
  it('Login válido', () => {
    cy.login(testData.user)
    cy.contains('My Account').should('exist')
  })
})
