import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = "https://www.gov.br/receitafederal/";

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Widget')) {
    return false;
  }
});

Given('I navigate to the Receita Federal', () => {
  cy.visit(url);
});

When('I navigate to the CPF consultation section', () => {
  cy.get('#cb4388c9-45db-4624-8c69-340056e48199 > .cover-banner-tile > a > img').click({ force: true }); 
});

When('I navigate to the CPF consultation process', () => {
  cy.get('[href="https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas"] > .back').click({ force: true });
});

When('I click the button', () => {
  cy.get('.header > .btn-solicitar').click();
});

When('I fill in the CPF number', () => {
  cy.origin('https://servicos.receita.fazenda.gov.br', () => {
    cy.get('#txtCPF').type('000.000.000-00');
  });
});

When('I fill in the birth date', () => {
  cy.origin('https://servicos.receita.fazenda.gov.br', () => {
    cy.get('#txtDataNascimento').type('01/01/1980');
  });
});

When('I confirm that I am human', () => {
  cy.origin('https://servicos.receita.fazenda.gov.br', () => {
    cy.get('#pulse').click({ force: true });
  });
});

When('I submit the consultation form', () => {
  cy.origin('https://servicos.receita.fazenda.gov.br', () => {
    cy.get('#id_submit').click();
  });
});

Then('I should see the CPF consultation results', () => {
  cy.origin('https://servicos.receita.fazenda.gov.br', () => {
    cy.get('div.resultados-consulta').should('be.visible');
  });
});
