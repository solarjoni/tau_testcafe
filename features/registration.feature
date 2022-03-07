Feature: Registration Feature

    As a visitor I can create a new account by the registration feature

Scenario: New User Registration E2E Scenario

Given I open the registration page
When I select the gender
And I enter First Name "Joe"
And I enter Last Name "Doe"
And I select Date of Birth "5"
And I select Month of Birth "January"
And I select Year of Birth "1984"
And I enter Email "some_email@test.com"
And I enter Password "123456"
And I confirm Password "123456"
And I click Register button
Then successfull message is displayed