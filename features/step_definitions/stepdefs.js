const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const registerpage = require("../../pages/RegisterPage")
const { Selector } = require('testcafe')

const URL = 'https://demo.nopcommerce.com/register/'

Given('I open the registration page', async function () {
// Write code here that turns the phrase above into concrete actions
    await testController.navigateTo(URL)
});

When('I select the gender', async function () {
// Write code here that turns the phrase above into concrete actions
    
});

When('I enter First Name {string}', async function (firstname) {
// Write code here that turns the phrase above into concrete actions
   
});

When('I enter Last Name {string}', async function (lastname) {
// Write code here that turns the phrase above into concrete actions
   
});

When('I select Date of Birth {string}', async function (day) {
// Write code here that turns the phrase above into concrete actions
   
});

When('I select Month of Birth {string}', async function (month) {
// Write code here that turns the phrase above into concrete actions
   
});

When('I select Year of Birth {string}', async function (year) {
// Write code here that turns the phrase above into concrete actions
    
});

When('I enter Email {string}', async function (email) {
    // Write code here that turns the phrase above into concrete actions
    
});

When('I enter Password {string}', async function (password) {
// Write code here that turns the phrase above into concrete actions
    
});

When('I confirm Password {string}', async function (password) {
// Write code here that turns the phrase above into concrete actions
    
});

When('I click Register button', async function () {
// Write code here that turns the phrase above into concrete actions
    
});

Then('successfull message is displayed', async function () {
// Write code here that turns the phrase above into concrete actions
   
});
