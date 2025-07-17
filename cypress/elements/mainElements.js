export const registerElements = {
  firstName: '[name=firstname]',
  lastName: '[name=lastname]',
  email: '[name=email]',
  password: '[name=password]',
  passwordConfirmation: '[name=password_confirmation]',
  submit: 'button[title="Create an Account"]'
}

export const loginElements = {
  email: '[name=login[username]]',
  password: '[name=login[password]]',
  submit: 'button[title="Sign In"]'
}

export const productElements = {
  searchInput: 'input[type=search]',
  productLink: '.product-item-link',
  addToCart: 'button[title="Add to Cart"]',
  cartIcon: '.showcart',
  checkout: 'button[title="Proceed to Checkout"]'
}
