

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/')
    
  })
  it('First test', () => {
    cy.get("button")
    .type("submit");
  })

})




