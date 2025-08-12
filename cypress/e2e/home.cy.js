describe('Kanban - Fluxos principais', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Deve adicionar uma nova lista', () => {
    cy.adicionarLista('teste');
  });
   it('Deve excluir uma lista', () => {
    const nomeLista = 'teste';
    cy.adicionarLista(nomeLista);
    cy.excluirLista(nomeLista);
  });
});
