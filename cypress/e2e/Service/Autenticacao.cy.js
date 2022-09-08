/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('auteicar usuario', () => {
    cy.request({

        method: "POST",
        url: "/api/auth",
        body: auth
    }).then((response) => {

        //validar o status
        expect(response.status).to.eq(200)

        // validar o retorno  nao pod ser vazio
        expect(response.body).to.be.not.empty

        // validar o response contem o algo
        expect(response.body).to.have.property("jwt")

        //validar se exist a chamada no cokie da url
        cy.getCookies('conexaoqa.herokuapp.com').should('exist')
    })


})

