# Teste Automação Webjump

Este projeto utiliza o Cypress para automação de testes end-to-end em ambientes Magento.

## Estrutura de Pastas
- `cypress/e2e/` — Especificações dos testes (cenários)
- `cypress/commands/` — Comandos customizados reutilizáveis
- `cypress/elements/` — Page Objects (elementos e seletores)
- `cypress/fixtures/` — Dados de teste (usuários, produtos, etc)
- `cypress/support/` — Suporte, configuração global e utilitários

## Pré-requisitos
- Node.js (recomendado: versão 18+)
- npm (geralmente instalado junto com o Node.js)

## Instalação
1. Clone este repositório ou baixe os arquivos.
2. No terminal, navegue até a pasta do projeto.
3. Instale as dependências:
   ```sh
   npm install
   ```

### Scripts disponíveis
- `npm test` — Executa todos os testes em modo headless
- `npm run cypress:open` — Abre o Cypress em modo interativo

### Principais dependências
- `cypress` — Framework de automação
- `mochawesome` — Relatórios automáticos
- `@faker-js/faker` — Geração de dados dinâmicos


## Execução dos Testes
- Para abrir o Cypress em modo interativo:
  ```sh
  npx cypress open
  ```
- Para rodar os testes em modo headless (terminal) e gerar relatório automático:
  ```sh
  npx cypress run --reporter mochawesome
  ```

## Relatórios e Evidências
- Relatórios automáticos são gerados na pasta `mochawesome-report` após a execução dos testes.
- Screenshots de erros são salvos automaticamente na pasta `cypress/screenshots` sempre que um teste falha.

## Observações
- Os ambientes de teste utilizados são:
  - Principal: https://magento.nublue.co.uk/
  - Alternativo: https://magento2-demo.magebit.com/
- O projeto faz fallback automático para o ambiente alternativo caso o principal esteja indisponível (ver configuração em `cypress/support/e2e.js`).
- Os dados de teste (usuários, produtos, etc) estão em `cypress/fixtures/`.
- Os comandos customizados estão em `cypress/commands/` e utilizam os elementos definidos em `cypress/elements/`.


## Fluxos Automatizados
- Cadastro de usuário (válido, inválido, senha curta, e-mail já cadastrado)
- Login (válido e inválido)
- Adicionar produto ao carrinho (produto válido, inválido, via busca, via página)
- Finalização de compra (com e sem endereço)
- Validação do pedido realizado (lista e detalhe)
- Esqueci minha senha

### Exemplos de comandos utilitários
- `cy.limparCarrinho()` — Limpa todos os itens do carrinho
- `cy.esperarCarregamento()` — Aguarda o carregamento da página

### Geração de usuários dinâmicos
Utilize os utilitários em `cypress/support/userUtils.js` para criar usuários únicos e estáticos para os testes.


## Boas Práticas
- Utilize o padrão Page Object para separar lógica de seleção de elementos.
- Reutilize comandos customizados para evitar duplicidade de código.
- Mantenha os dados de teste centralizados em fixtures.
- Comente o código para facilitar o entendimento por iniciantes.
- Utilize comandos customizados no padrão Cypress.Commands.add('nomeDoComando', ...), por exemplo:
  - `cy.cadastrarNovoUsuario(user)`
  - `cy.loginUsuario(user)`
  - `cy.adicionarProdutoCarrinho(produto)`
  - `cy.finalizarCompra()`
  - `cy.limparCarrinho()`
  - `cy.esperarCarregamento()`

---

Dúvidas? Consulte a documentação oficial do [Cypress](https://docs.cypress.io/).
