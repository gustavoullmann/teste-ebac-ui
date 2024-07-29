/// <reference types = "cypress"/>

let site = 'http://lojaebac.ebaconline.art.br/minha-conta/';
let usuario = 'teste1234@teste.com.br';
let senha = 'testando1234';

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit(site)
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('usuário inexistente')
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'não está registrado neste site')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type(usuario)
        cy.get('#password').type('senhaInvalida')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })
})