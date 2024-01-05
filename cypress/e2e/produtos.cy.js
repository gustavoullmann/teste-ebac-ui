/// <reference types = "cypress"/>

let site = 'http://lojaebac.ebaconline.art.br/produtos/';

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit(site);
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class = "product-block grid"]')
            .first()
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class = "product-block grid"]')
            .first()
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
    });

});
