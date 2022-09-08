// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


///Cadastro
const register = '[data-test="login-register"]'
const nameCa = '[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input'
const emailCad = '[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input'
const passwordCad = '[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input'
const passw0rdCad2 ='[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input'
const registerCadsubmit ='[data-test="register-submit"]'
//perfil
const Welcome = '[data-test="dashboard-welcom'
const CreateProfile = '[data-test="dashboard-createProfile'
const SelectStatus = '#mui-component-select-status'
const Status2 = '[data-test="status-2"]'
const CampoEmpresa = '[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input'
const CampoSite = '[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input'
const CampoCidade = '[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input'
const CampoConhecimento = '[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input'
const UsuarioGit = '[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input'
const BotaoSubmit = '[data-test="profile-submit"]'
const PerfilCriado = '[data-test="alert"]'

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})



Cypress.Commands.add("login", (email, senha) => {
    cy.visit('login')             
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("cadastro", (nome, email, senha, senha2) => {
    cy.get(register).click()
    cy.get(nameCa).type(nome)
    cy.get(emailCad).type(email)
    cy.get(passwordCad).type(senha)
    cy.get(passw0rdCad2).type(senha2)
    cy.get(registerCadsubmit).click()
})

Cypress.Commands.add("perfil", (staus, status2, empresa, site, cidade, conhecimento, git) => {

    cy.get(CreateProfile).click()
    cy.get(SelectStatus).type(staus)
    cy.get(Status2).type(status2)
    cy.get(CampoEmpresa).type(empresa)
    cy.get(CampoSite).type(site)
    cy.get(CampoCidade).type(cidade)
    cy.get(CampoConhecimento).type(conhecimento)
    cy.get(UsuarioGit).type(git)
    cy.get(BotaoSubmit).click()
    cy.get(PerfilCriado).should('contain', 'Perfil Criado')

})


