
///<reference types="cypress" />
const experienciaPage = require('../../support/Experiencia/Experiencia-pages')


describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {

        cy.fixture("user").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-experiencia')
    });

    it('Deve adicionar uma experiência com sucesso', () => {

        experienciaPage.addExperiencia('QA','Via', 'SP', '01/01/2022', '01/01/2022', 'Viahub e top')
       
        
    });

    it('Deve excluir uma experiência com sucesso', () => {

        experienciaPage.addExperiencia('QA','Via', 'SP', '01/01/2022', '01/01/2022', 'Viahub e top')
        cy.get('[data-test="experience-delete"]').first().click()
        cy.contains('Experiência Removida').should('be.visible')
    });
});