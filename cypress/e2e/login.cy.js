/// <reference types = "cypress"/>

let site = 'http://lojaebac.ebaconline.art.br/minha-conta/';
let usuario = 'aluno_ebac@teste.com';
let senha = 'teste@teste.com';

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit(site)
    });

    afterEach(() => {
        cy.screenshot()
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
        cy.get('.woocommerce-error > li').should('contain', 'não está cadastrado neste site')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type(usuario)
        cy.get('#password').type('senhaInvalida')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida')
    })
})