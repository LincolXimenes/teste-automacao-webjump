Cypress.Commands.add('register', (user) => {
  cy.visit('/customer/account/create/')
  cy.get('[name=firstname]').type(user.firstName)
  cy.get('[name=lastname]').type(user.lastName)
  cy.get('[name=email]').type(user.email)
  cy.get('[name=password]').type(user.password)
  cy.get('[name=password_confirmation]').type(user.password)
  cy.get('button[title="Create an Account"]').click()
})

Cypress.Commands.add('login', (user) => {
  cy.visit('/customer/account/login/')
  cy.get("[name='login[username]']").type(user.email)
  cy.get("[name='login[password]']").type(user.password)
  cy.contains('button', 'Sign In').should('be.visible').click()
})

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.visit('/')
  cy.get('input[type=search]').type(productName + '{enter}')
  cy.contains('.product-item-link', productName).click()
  cy.get('button[title="Add to Cart"]').click()
})

Cypress.Commands.add('checkout', () => {
  cy.get('.showcart').click()
  cy.contains('Proceed to Checkout').click() 
})
