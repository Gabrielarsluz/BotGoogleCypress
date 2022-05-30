describe("BotGoCypress", () => {
    beforeEach (() =>{ 
    cy.visit("https://google.com/")
});

    
it ("procurar cypress", () => {
    cy.get('.gLFyf').type("cypress.io{enter}")
    cy.get('.LC20lb').eq(0).click()
    
});
   
});


    
