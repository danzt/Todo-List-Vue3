describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/tasks');
    cy.wait(4000);
    cy.get('.bg-yellow-500').click();
    cy.wait(4000);
    cy.get('.border-0').click();
    cy.wait(4000);
    cy.get('.border-0').type('New Task');
    cy.wait(4000);
    cy.get('.bg-sky-600').click();
    cy.wait(4000);
  })
})
