Cypress.Commands.add('cadastrarUsuarioValido', () => {
  cy.visit('/customer/account/create/')
  cy.get('[name=firstname]').type('Valid')
  cy.get('[name=lastname]').type('User')
  cy.get('[name=email]').type(`valid${Date.now()}@example.com`)
  cy.get('[name=password]').type('Test@1234')
  cy.get('[name=password_confirmation]').type('Test@1234')
  cy.get('button[title="Create an Account"]').click()
  cy.contains('Thank you for registering').should('exist')
})

Cypress.Commands.add('loginUsuarioValido', () => {
  cy.get('[name=email]').then($input => {
    const email = $input.val() || `valid${Date.now()}@example.com`
    cy.visit('/customer/account/login/')
    cy.get('[name=email]').type(email)
    cy.get('[name=password]').type('Test@1234')
    cy.get('button[title="Sign In"]').click()
  })
})

Cypress.Commands.add('preencherEnderecoValido', () => {
  cy.get("[name='country_id']", { timeout: 10000 }).should('be.visible').select('US')
  cy.get("[name='street[0]']").type('123 Main St')
  cy.get('[name=city]').type('New York')
  cy.get('[name=region_id]').select('New York')
  cy.get('[name=postcode]').type('10001')
  cy.get('[name=telephone]').type('2125551234')
})

Cypress.Commands.add('cadastrarUsuarioSemEndereco', () => {
  cy.visit('/customer/account/create/')
  cy.get('[name=firstname]').type('NoAddress')
  cy.get('[name=lastname]').type('User')
  cy.get('[name=email]').type(`noaddress${Date.now()}@example.com`)
  cy.get('[name=password]').type('Test@1234')
  cy.get('[name=password_confirmation]').type('Test@1234')
  cy.get('button[title="Create an Account"]').click()
  cy.contains('Thank you for registering').should('exist')
})

Cypress.Commands.add('loginUsuarioSemEndereco', () => {
  cy.get('[name=email]').then($input => {
    const email = $input.val() || `noaddress${Date.now()}@example.com`
    cy.visit('/customer/account/login/')
    cy.get('[name=email]').type(email)
    cy.get('[name=password]').type('Test@1234')
    cy.get('button[title="Sign In"]').click()
  })
})
import { UsuarioElements } from '../elements/usuario.elements'
const elements = new UsuarioElements()

Cypress.Commands.add('clicarNovoUsuario', () => {
  cy.visit('/customer/account/create/')
  cy.wait(800)
})

Cypress.Commands.add('preencherUsuario', (usuario) => {
  if (usuario.firstName) cy.get(elements.firstName()).clear().type(usuario.firstName)
  if (usuario.lastName) cy.get(elements.lastName()).clear().type(usuario.lastName)
  if (usuario.email) cy.get(elements.email()).first().clear().type(usuario.email)
  if (usuario.password) cy.get(elements.password()).first().clear().type(usuario.password)
  if (usuario.passwordConfirmation) cy.get(elements.passwordConfirmation()).first().clear().type(usuario.passwordConfirmation)
})

Cypress.Commands.add('salvarUsuario', () => {
  cy.get(elements.submit()).click()
})

Cypress.Commands.add('criarEVerificarUsuario', (usuario) => {
  cy.clicarNovoUsuario()
  cy.preencherUsuario(usuario)
  cy.salvarUsuario()
  cy.contains('Thank you for registering').should('exist')
})
