/// <reference types="cypress"/>

describe('Dynamic tests', () => {
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne','Frango','Pizza','Vegetariano']
    foods.forEach(food => {
        it(`Cadastro com comida ${food}`, () =>{
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Teste')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Karate')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })

    it.only('Deve selecionar todos utilizando o each', () =>{
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Teste')
        cy.get(`[name=formSexo][value=M]`).click()

        cy.get('[name=formComidaFavorita]').each($el => {
            //$el.click()
            if($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Karate')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        ////cy.clickAlert('#formCadastrar','Tem certeza que voce eh vegetariano?')
    })

})