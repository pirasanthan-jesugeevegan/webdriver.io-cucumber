Feature: Test the attributes of a given element
    As a developer
    I want to be able to test the attributes of a given element

    Background:
        Given I open the site "/"

    Scenario: The attribute "role" of a element should be "note"
        When the user clicks on '[href="/watchlist/"]'