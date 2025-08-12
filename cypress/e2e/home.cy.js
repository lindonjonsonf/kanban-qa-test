describe('Kanban - Fluxos principais', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar uma nova lista', () => {
    cy.contains('Adicionar outra lista').click();
    cy.get('.sc-gsnTZi').type('teste');
    cy.get('.btn').click();
    cy.contains('.board-header-title', 'teste').should('be.visible');
  });
});
