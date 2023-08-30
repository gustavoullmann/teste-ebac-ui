/// <reference types = "cypress"/>
const { faker } = require('@faker-js/faker');

let site = 'http://lojaebac.ebaconline.art.br/minha-conta/'
var usuario = faker.internet.email()
var senha = 'Test@19829%%%'
var nome = faker.person.firstName()
var sobrenome = faker.person.lastName()

describe('Funcionalidade Pré Cadastro', () => { 

    beforeEach(() => {
        cy.visit(site)
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(usuario)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'modificados com sucesso')
    });

});