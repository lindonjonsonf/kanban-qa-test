// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('adicionarLista', (nome) => {
  cy.contains('Adicionar outra lista').click();
  cy.get('.sc-gsnTZi').type(nome);
  cy.get('.btn').click();
  cy.contains('.board-header-title', nome).should('be.visible');
});

Cypress.Commands.add('excluirLista', (nomeDaLista) => {
  cy.get(`#${nomeDaLista}trash`).click();
});
Cypress.Commands.add('clicarAdicionarTarefa', (nomeLista) => {
  cy.contains('h1.board-header-title', nomeLista) // encontra o título da lista
    .parents('.sc-iBkjds') // sobe para o container da lista (ajuste se o seletor não bater)
    .find('div[id$="CreateTask"]') // acha o botão que tem id terminando com CreateTask
    .click();
});
Cypress.Commands.add('adicionarTarefa', (nomeLista, nomeTarefa) => {
  cy.adicionarLista(nomeLista);
  cy.clicarAdicionarTarefa(nomeLista);
  cy.get('.sc-gsnTZi').type(nomeTarefa);
  cy.contains('button', 'Enviar').click();
  cy.contains('h1.board-header-title', nomeLista)
    .parents('.sc-iBkjds')
    .find('.board-cards')
    .should('contain.text', nomeTarefa);
});
Cypress.Commands.add('excluirTarefa', (nomeLista, nomeTarefa) => {
  cy.contains('h1.board-header-title', nomeLista)
    .parents('.sc-iBkjds')
    .find('.board-cards .content header')
    .contains('p', nomeTarefa)
    .parents('header')
    .find('svg.trash')
    .click({ force: true });

  cy.contains('h1.board-header-title', nomeLista)
    .parents('.sc-iBkjds')
    .find('.board-cards')
    .should('not.contain.text', nomeTarefa);
});