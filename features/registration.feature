Feature: Registration Feature

    As a visitor I can create a new account by the registration feature

@e2e
Scenario Outline: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And I enter First Name "<firstname>"
And I enter Last Name "<lastname>"
And I select Date of Birth "<day>"
And I select Month of Birth "<month>"
And I select Year of Birth "<year>"
And I enter Email "<email>"
And I enter Password "<password>"
And I confirm Password "<password>"
And I click Register button
Then Successfull message is displayed

Examples:
| firstname | lastname | email | password | day | month | year |
| Joe | Doe | some_email | 123456 | 5 | January | 1984 |
#| Doe | Joe | another_email | 654321 | 25 | December | 1994 |
