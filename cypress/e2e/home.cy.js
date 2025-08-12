const nomeLista = 'teste';
const nomeTarefa = 'tarefa teste';

describe('Kanban - Fluxos principais', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar uma nova lista', () => {
    cy.adicionarLista(nomeLista);
    
  });

  it('Deve excluir uma lista', () => {
    cy.adicionarLista(nomeLista);
    cy.excluirLista(nomeLista);
    cy.contains('.board-header-title', nomeLista).should('not.exist')
  });

  it('Deve adicionar uma nova tarefa', () => {
    cy.adicionarTarefa(nomeLista, nomeTarefa);
    cy.contains('.board-cards', nomeTarefa).should('exist');
  });

  it('Deve excluir uma tarefa', () => {
    cy.adicionarTarefa(nomeLista, nomeTarefa); // já cria lista + tarefa
    cy.excluirTarefa(nomeLista, nomeTarefa);
    cy.contains('.board-cards', nomeTarefa).should('not.exist');
  });

  it('Deve mudar de tema', () => {
    cy.get('input[type="checkbox"][role="switch"]').click({ force: true });
  });

});
