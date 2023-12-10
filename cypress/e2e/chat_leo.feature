Feature: Chat Leo Interaction
  As a user
  I want to interact with the chat Leo on the Receita Federal website
  So that I can receive assistance or information

  Scenario: Sending a message to Chat Leo and receiving a response
    Given I am back on the Receita Federal homepage
    When I open the Chat Leo interface
    And I send a message to Chat Leo
    Then I should receive a response from Chat Leo