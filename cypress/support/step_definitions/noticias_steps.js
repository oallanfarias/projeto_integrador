import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = "https://www.gov.br/receitafederal/";

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Widget')) {
      return false;
    }
  });

  Given('I return to the Receita Federal homepage', () => {
    cy.visit(url);
  });
  
  When('I click on the "Ultimas Noticias" button', () => {
    cy.get('#bfb85c02-d172-42ae-82d9-31c3e446b397 > .outstanding-header > .outstanding-link').click({ force: true }); 
  });
  
  Then('I should be taken to the latest news section', () => {
    cy.get('.documentFirstHeading').should('contain', 'Últimas');
  });
