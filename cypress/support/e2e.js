import '../commands/usuario.commands'
import '../commands/mainCommands'
// Ignorar erros de frontend do app que não impactam o fluxo de teste
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe o teste
  return false
})
import '../commands/login.commands'
import '../commands/cadastro.commands'
import '../commands/produto.commands'
import '../commands/common.commands'

// Fallback automático de ambiente
before(() => {
  cy.request({
    url: Cypress.config('baseUrl'),
    failOnStatusCode: false,
    timeout: 20000
  }).then((resp) => {
    if (!resp || resp.status >= 500 || resp.status === 0 || !resp.isOkStatusCode) {
      Cypress.config('baseUrl', Cypress.env('ALTERNATIVE_URL'))
    }
  })
})

// Exemplo de execução em múltiplas resoluções
const viewports = [
  { device: 'desktop', width: 1280, height: 800 },
  { device: 'tablet', width: 768, height: 1024 },
  { device: 'mobile', width: 375, height: 667 }
]

beforeEach(function () {
  // Se quiser rodar todos os testes em todas as resoluções, descomente abaixo:
  // const idx = Math.floor(Math.random() * viewports.length)
  // cy.viewport(viewports[idx].width, viewports[idx].height)
})
