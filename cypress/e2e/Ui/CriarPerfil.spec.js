/// <reference types="cypress" />
import user from '../../fixtures/user.json'


beforeEach(() => {
    cy.visit('login')


});

describe('Funcionalidade: fazer login', () => {

    it('Realizar login com sucesso', () => {

        cy.fixture("user").then((user) => {
            cy.login(user[0].email, user[0].senha)


        });
    });
});

describe('Funcionalidade: criar perfil', () => {
    it('Criar perfil com sucesso', () => {
        cy.fixture("user").then((user) => {
            cy.login(user[0].email, user[0].senha)


        });
        cy.perfil('qa', 'pleno', 'Opah', 'http://www.opa.com.br', 'São Paulo', '2kthg2019', 'testes manuais , teste automatizados, Cypress, teste integrados, teste de caixa preta, teste de strees, teste de api.', '')

    });

});

describe('Funcionalidade: excluir', () => {
    it('Deve excluir o usuario', () => {
        cy.fixture("user").then((user) => {
            cy.login(user[0].email, user[0].senha)


        });
        cy.get('[data-test="dashboard-deleteProfile"]').click()


    });
});
describe('Funcionalidade: Cadastro', () => {
    it('Deve fazer cadastro com sucesso', () => {

        cy.cadastro('thiago bonfim', 'thiagobonfim73@gmail.com', '123456', '123456')

    });

});











