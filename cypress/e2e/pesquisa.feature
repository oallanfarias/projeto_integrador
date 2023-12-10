Feature: Search Functionality
    As a user
    I want to use the search functionality on the Receita Federal website
    So that I can find information quickly

    Scenario: Performing a search
        Given I navigate to the Receita Federal homepage
        And I click on the page to activate the search field
        When I enter "restituição" into the search field
        And I submit the search
        Then I should see results related to "restituição"

