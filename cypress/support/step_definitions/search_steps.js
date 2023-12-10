import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = "https://www.gov.br/receitafederal/";

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Widget')) {
    return false;
  }
});

Given('I navigate to the Receita Federal homepage', () => {
  cy.visit(url);
});

Given('I click on the page to activate the search field', () => {
  cy.get('#searchtext-input').click({ force: true }); 
});

When('I enter "restituição" into the search field', () => {
  cy.get('#govbr-busca-input').type('restituição');
});

When('I submit the search', () => {
  cy.get('.aa-SubmitButton').click(); 
});

Then('I should see results related to "restituição"', () => {
  cy.get('.totalTermo').should('contain', 'restituição');
});

