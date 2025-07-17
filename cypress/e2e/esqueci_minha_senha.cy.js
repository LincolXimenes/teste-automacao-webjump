/// <reference types="cypress" />

describe.skip('Esqueci minha senha', () => {
  it('Solicitar redefinição de senha com e-mail válido', () => {
    cy.visit('/customer/account/forgotpassword/')
    cy.get('[name=email]').first().type('testuser@example.com')
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.contains('If there is an account associated with').should('exist')
  })

  it('Solicitar redefinição de senha com e-mail inválido', () => {
    cy.visit('/customer/account/forgotpassword/')
    cy.get('[name=email]').first().type('naoexiste@example.com')
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.contains('If there is an account associated with').should('exist')
  })
})
