/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('login')



});
describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.fixture("user").then((user) => {
            cy.login(user[0].email, user[0].senha)


        });
    });
    it('Validar mensagem de erro quando enserir usuario ou senha invalidos', () => {
        cy.login(user[0].email, user[1].senha)
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')

    });

});

































































/*import CommonPage from '../../support/Common/CommonPage'
import LoginPage from '../../support/Login/LoginPage'

describe('Validar login', { tags: '@demo' }, () => {
    before(() => {
        cy.navigate('/')
        CommonPage.clickInMenuLogin()
    })

    context('Dado que acesso a tela de login', () => {
        it('Então devo visualizar a tela login', () => {
            LoginPage.validateLogin()
        })
    })

    context('Dado que realizo o login', () => {
        it('Então insiro o CPF ou CNPJ', () => {
            cy.fixture("user").then((data) => {
                LoginPage.fillFieldUsername(data.cpf)
            })
        })

        it('E clico no botão "Continuar"', () => {
            LoginPage.clickInButtonContinueLogin()
        })

        it('E insiro a senha de acesso', () => {
            LoginPage.fillFieldPassword(Cypress.env('password'))
        })

        it('E clico no botão "Entrar"', () => {
            LoginPage.clickInButtonLogin()
        })
    })
})*/