///<reference types="cypress" />

const faker = require('faker-br')



beforeEach(() => {
    cy.visit('login')
    cy.login('thiagobonfim73@gmail.com', '123456')

});



describe('Funcionalidade: Cadastro', () => {

    it('Deve fazer cadastro com sucesso', () => {       
       cy.cadastro('thiago bonfim','thiagobonfim73@gmail.com', '123456', '123456' )
    });
});