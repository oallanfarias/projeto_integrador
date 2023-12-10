Feature: Main Navigation Menu
  As a user
  I want to navigate through the main menu
  So that I can access different sections of the Receita Federal website

  Scenario: Verifying the visibility of the side menu
    Given I am on the Receita Federal homepage
    And I click on the page to activate the side menu button
    When I click on the side menu button
    Then the side menu should be visible

