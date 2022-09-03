/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('login')


});


describe('Funcionalidade: fazer login', () => {
    it('realizar login com sucesso', () => {
        cy.login('thiagobonfim73@gmail.com', '123456')
    });

});


describe('Funcionalidade: criar perfil', () => {
    it('criar perfil com sucesso', () => {
        cy.login('thiagobonfim73@gmail.com', '123456')
        cy.perfil('qa', 'pleno', 'Opah', 'http://www.opa.com.br', 'São Paulo', '2kthg2019', 'testes manuais , teste automatizados, Cypress, teste integrados, teste de caixa preta, teste de strees, teste de api.', '')

    });

});

describe('Funcionalidade: excluir', () => {
    it('Deve excluir o usuario', () => {
        cy.login('thiagobonfim73@gmail.com', '123456')
        cy.get('[data-test="dashboard-deleteProfile"]').click()


    });
});
describe('Funcionalidade: Cadastro', () => {
    it('Deve fazer cadastro com sucesso', () => {

        cy.cadastro('thiago bonfim', 'thiagobonfim73@gmail.com', '123456', '123456')

    });

});











