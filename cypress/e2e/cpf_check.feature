Feature: CPF Consultation Page Access
    As a user
    I want to access the CPF consultation page
    So that I can check CPF information

    Scenario: Accessing and using the CPF Consultation Page
        Given I navigate to the Receita Federal
        When I navigate to the CPF consultation section
        And I navigate to the CPF consultation process
        And I click the button
        And I fill in the CPF number
        And I fill in the birth date
        # And I confirm that I am human
        And I submit the consultation form
        Then I should see the CPF consultation results