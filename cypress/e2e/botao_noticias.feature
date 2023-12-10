Feature: Ultimas Noticias Button
    As a user
    I want to view the latest news
    So that I can stay updated with the latest information from Receita Federal

    Scenario: Accessing the latest news
        Given I return to the Receita Federal homepage
        When I click on the "Ultimas Noticias" button
        Then I should be taken to the latest news section

