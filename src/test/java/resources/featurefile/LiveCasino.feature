Feature: LiveCasino Test
  As a user I want to click on Live Casino test on Virgingames website

  Background: I am on homepage
    Given I accepted cookies
    Then I can see virgingame homepage

    Scenario: User should navigate to Live Casino page successfully
      Given I am on homepage
      When I click on Live Casino tab
      Then I should see Live Casino page successfully


