class ExperienciaPage {

    get #posicao() { return cy.get('[data-test="experience-title"]') }
    get #empresa() { return cy.get('[data-test="experience-company"]') }
    get #local() { return cy.get('[data-test="experience-location"]') }
    get #datafim() { return cy.get('[data-test="experience-to"]') }
    get #pdatainicio() { return cy.get('[data-test="experience-from"]') }
    get #descricao() { return cy.get('[rows="1"]') }
    get #btAdd() { return cy.get('[data-test="experience-submit"]') }
    get #checkAtual() { return cy.get('.jss5') }


    addExperiencia(posicao, empresa, local, dataInicio, datafim, descricao) {

        this.#posicao.type(posicao, {delay: 100})
        this.#empresa.type(empresa, {delay: 100})
        this.#local.type(local)
        this.#pdatainicio.type(dataInicio)
        this.#datafim.type(datafim)
        this.#descricao.type(descricao)
        this.#btAdd.click()

    }



    addExperienciaAtual(posicao, empresa, local, dataInicio, datafim, descricao) {

        this.#posicao.type(posicao, {delay: 1000})
        this.#empresa.type(empresa, {delay: 1000})
        this.#local.type(local)
        this.#pdatainicio.type(dataInicio)
        this.#checkAtual.check()
        this.#descricao.type(descricao)
        this.#btAdd.click()

    }

}
module.exports = new ExperienciaPage()