/// <reference types="cypress"/>

describe('Validacoes...', ()=>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()    
    })
    it('Nome', () =>{ 

        cy.on('window:cadastrar', msg =>{
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })

        cy.get('#formCadastrar').click()
    })
    it('Sobrenome', () =>{

        cy.on('window:cadastrar', msg =>{
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })

        cy.get('#formNome').type('Nome') 
        cy.get('#formCadastrar').click()
    })

    it('Sexo', () =>{

        cy.on('window:cadastrar', msg =>{
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
        
        cy.get('#formNome').type('Nome')
        cy.get('[data-cy=dataSobrenome]').type('Sobrenome')
        cy.get('#formCadastrar').click()
    })
    
    it.only('Sucesso', () =>{
        cy.get('#formNome').type('Nome')
        cy.get('[data-cy=dataSobrenome]').type('Sobrenome')
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('have.value', 'Cadastrado!')

    })

})