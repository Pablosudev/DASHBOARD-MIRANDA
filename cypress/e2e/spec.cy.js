describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Comprobacion de los elementos", () => {
    cy.get("[data-cy='ButtonStyled']").type("submit");

    cy.get("[data-cy='Title']").should("have.text", "HOTEL MIRANDA");
    
    cy.get("[data-cy='InputEmail']");
    
    cy.get("[data-cy='InputPassword']");

    cy.get("[data-cy='ButtonStyled']").submit
  });

  it("Login", () => {
    
    

    cy.get("[data-cy='InputEmail']")
    .type(1234)

    cy.get("[data-cy='InputPassword']")
    .type(1234)

    cy.get("[data-cy='ButtonStyled']").click()

    cy.visit("http://localhost:5173/dashboard")
    cy.wait(5000)
    
  })
  it("Login Error", () => {
    
    
    cy.get("[data-cy='InputEmail']")
    .type(234)

    cy.get("[data-cy='InputPassword']")
    .type(234)
    cy.get("[data-cy='ButtonStyled']").click()
     
    cy.on('window:alert',(alertText) => {
      expect(alertText).to.contains('Incorrect password or email.')
    })
  })
  it("Comprobamos que no permite ir a otra URL", () => {
    cy.visit("http://localhost:5173/rooms")
    cy.get("[data-cy='InputPassword']")
  })
  
});
