import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = "https://www.gov.br/receitafederal/";

Given('I am back on the Receita Federal homepage', () => {
  cy.visit(url);
});

When('I open the Chat Leo interface', () => {
  cy.get('.sc-open-icon').click();
});

When('I send a message to Chat Leo', () => {
  cy.wait(5000); // Espera 5 segundos
  cy.get('.sc-user-input--text').type('1{enter}');
  cy.wait(2000); // Espera 2 segundos
  cy.get('.sc-user-input--text').type('sair{enter}');
  cy.wait(2000); // Espera mais 2 segundos
  cy.get('.sc-user-input--text').type('2{enter}');
});

Then('I should receive a response from Chat Leo', () => {
  cy.get('.sc-message--content > .sc-message--text > .sc-message--text-content > span').should('contain.text', 'Se precisar de mais informações, basta me enviar uma mensagem.');
});


