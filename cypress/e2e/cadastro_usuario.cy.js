/// <reference types="cypress" />
import testData from '../fixtures/testData.json'

describe('Cadastro de Usuário', () => {

  it('Cadastro com e-mail já cadastrado (usuário fixo)', () => {
    cy.visit('/customer/account/create/')
    cy.cadastrarNovoUsuario(testData.user)
    cy.contains('There is already an account with this email address').should('exist')
  })

  it('Cadastro com e-mail inválido', () => {
    cy.cadastrarNovoUsuario({ firstName: 'Lucas', lastName: 'Silva', email: 'invalido', password: 'Test@1234' })
    cy.contains('Please enter a valid email address').should('exist')
  })

  it('Cadastro com senha curta', () => {
    cy.cadastrarNovoUsuario({ firstName: 'Lucas', lastName: 'Silva', email: 'lucas.silva+' + Date.now() + '@example.com', password: '123' })
    cy.contains('Minimum length of this field must be equal or greater than 8 symbols').should('exist')
  })
})
