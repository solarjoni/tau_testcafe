import { ClientFunction } from "testcafe"
import homepage from "../pages/HomePage"
import registerpage from "../pages/RegisterPage"
import loginpage from "../pages/LoginPage"
import customerpage from "../pages/CustomerPage"

const dataSet = require("../data/data.json")

const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)
var randomNumber = Math.floor(Math.random() * 10000)

fixture("Registration fixture")
    .page(URL)

test("Assert Home Page", async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok()
})

dataSet.forEach(data => {
    test("User Registration and Login Test", async t => {
        await t
            .click(homepage.registerLink)
            .expect(getURL()).contains("register")
            .click(registerpage.genderOption)
            .typeText(registerpage.firstName, data.firstname)
            .typeText(registerpage.lastName, data.lastname)
        await registerpage.selectDay(data.birthday)
        await registerpage.selectMonth(data.birthmonth)
        await registerpage.selectYear(data.birthyear)
        await t
            .typeText(registerpage.email, data.email + randomNumber + "@test.com")
            .typeText(registerpage.password, data.password)
            .typeText(registerpage.confirmPassword, data.password)
            .click(registerpage.registerButton)
            .expect(registerpage.successfullMessage.exists).ok()
            .click(homepage.logoutLink)
            .click(homepage.loginLink)
            .expect(loginpage.accountHeader.exists).ok()
            .typeText(loginpage.empailInput, data.email + randomNumber + "@test.com")
            .typeText(loginpage.passwordInput, data.password)
            .click(loginpage.submitButton)
            .click(homepage.myAccountLink)
            .expect(customerpage.ordersLink.exists).ok()
            .click(customerpage.ordersLink)
            .expect(customerpage.noOrdersLabel.exists).ok()
    })
})