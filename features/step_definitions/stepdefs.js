const assert = require('assert')
const { Given, When, Then } = require("@cucumber/cucumber")
const registerpage = require("../../pages/RegisterPage")

const URL = "https://demo.nopcommerce.com/register/"
var randomNumber = Math.floor(Math.random() * 10000)

Given('I open the registration page', async function () {
// Write code here that turns the phrase above into concrete actions
    await testController.navigateTo(URL)
});

When('I select the gender', async function () {
// Write code here that turns the phrase above into concrete actions
    await testController
        .click(registerpage.RegisterPage.GenderButton())
});

When('I enter First Name {string}', async function (firstname) {
// Write code here that turns the phrase above into concrete actions
   await testController.typeText(registerpage.RegisterPage.FirstName(), firstname)
});

When('I enter Last Name {string}', async function (lastname) {
// Write code here that turns the phrase above into concrete actions
await testController.typeText(registerpage.RegisterPage.LastName(), lastname)
});

When('I select Date of Birth {string}', async function (day) {
// Write code here that turns the phrase above into concrete actions
   await testController.click(registerpage.RegisterPage.DateOfBirth())
//    await testController.click(registerpage.RegisterPage.DateOfBirth().find("option").withText(day))
   await testController.click(registerpage.RegisterPage.ListOption().withText(day))
});

When('I select Month of Birth {string}', async function (month) {
// Write code here that turns the phrase above into concrete actions
await testController.click(registerpage.RegisterPage.MonthOfBirth())
await testController.click(registerpage.RegisterPage.ListOption().withText(month))
});

When('I select Year of Birth {string}', async function (year) {
// Write code here that turns the phrase above into concrete actions
await testController.click(registerpage.RegisterPage.YearOfBirth())
await testController.click(registerpage.RegisterPage.ListOption().withText(year))
});

When('I enter Email {string}', async function (email) {
    // Write code here that turns the phrase above into concrete actions
    await testController.typeText(registerpage.RegisterPage.Email(), email + randomNumber + "@test.com")
});

When('I enter Password {string}', async function (password) {
// Write code here that turns the phrase above into concrete actions
    await testController.typeText(registerpage.RegisterPage.Password(), password)
});

When('I confirm Password {string}', async function (password) {
// Write code here that turns the phrase above into concrete actions
await testController.typeText(registerpage.RegisterPage.ConfirmPassword(), password)
});

When('I click Register button', async function () {
// Write code here that turns the phrase above into concrete actions
    await testController.click(registerpage.RegisterPage.RegistrationButton())
});

Then('Successfull message is displayed', async function () {
// Write code here that turns the phrase above into concrete actions
   await testController.expect(registerpage.RegisterPage.SuccessfullMessage().exists).ok()
});
