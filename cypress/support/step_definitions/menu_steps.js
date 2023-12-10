import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = "https://www.gov.br/receitafederal/";

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Widget')) {
    return false;
  }
});

Given('I am on the Receita Federal homepage', () => {
  cy.visit(url);
});

Given('I click on the page to activate the side menu button', () => {
  cy.get('.fa-bars').click({ force: true }); 
});

When('I click on the side menu button', () => {
  cy.get('#main-navigation > .list-navigation').click({ force: true });
});

Then('the side menu should be visible', () => {
  cy.get('#main-navigation > .list-navigation > :nth-child(1) > .plain').should('be.visible');
});

