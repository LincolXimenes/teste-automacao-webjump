import { faker } from '@faker-js/faker'

export const getOrCreateStaticUser = () => {
  const key = 'staticUser'
  let user = JSON.parse(window.localStorage.getItem(key))
  if (!user) {
    user = {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser.webjump+' + Date.now() + '@example.com',
      password: 'Test@1234'
    }
    window.localStorage.setItem(key, JSON.stringify(user))
  }
  return user
}

export const generateUniqueUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email({ provider: 'example.com' }),
  password: 'Test@' + faker.string.alphanumeric(6)
})
