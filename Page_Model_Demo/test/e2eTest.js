import { ClientFunction } from "testcafe";
import homepage from "../pages/HomePage"
import registerpage from "../pages/RegisterPage"
import searchresults from "../pages/SearchResultPage"
import productDetails from "../pages/ProductDetailsPage"
import cartpage from "../pages/CartPage"
import checkoutpage from "../pages/CheckoutPage"
import myordespage from "../pages/MyOrdersPage"

const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)
var randomNumber = Math.floor(Math.random() * 10000)
var userEmail = "aaa" + randomNumber + "@aaa.com"

fixture `E2E Fixture`
    .page(URL)

test("Assert home page", async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok()
})

test("Place Order E2E Tests", async (t) => {
    await t
        // .maximizeWindow()
        .click(homepage.registerLink)
        .expect(getURL()).contains("register")
        .click(registerpage.genderOption)
        .typeText(registerpage.firstName, "Moanir")
        .typeText(registerpage.lastName, "Perdue")
        .typeText(registerpage.email, userEmail)
        .typeText(registerpage.password, "123456")
        .typeText(registerpage.confirmPassword, "123456")
        .click(registerpage.registerButton)
        .expect(registerpage.successfullMessage.exists).ok()
        // .takeScreenshot()
    
    await homepage.search("Apple Macbook Pro 13-inch")
    await t
        // .setTestSpeed(0.6)
        // search results
        .click(searchresults.productTitle)
        // .click(searchresults.productItem)
        // .expect(getURL()).contains("Apple Macbook Pro 13-inch") // not working
        .expect(getURL()).contains("apple")
        // product details
        .expect(productDetails.productPrice.exists).ok()
        .selectText(productDetails.productQuantity).pressKey("delete")
        .typeText(productDetails.productQuantity,"3")
        .click(productDetails.addToCart)
        .expect(productDetails.successMessage.exists).ok()
        .wait(3000)
        // cart and checkout
        .click(homepage.cartLink)
        .click(cartpage.termsLabel)
        .click(cartpage.checkoutButton)
        .expect(getURL()).contains("checkout")
        // place order
        await checkoutpage.selectCountry("Germany")
        await t
            // .setTestSpeed(0.6)
            .takeScreenshot()
            .typeText(checkoutpage.cityText, "Berlin")
            .typeText(checkoutpage.addressText, "street 123")
            .typeText(checkoutpage.zipText, "123456")
            .typeText(checkoutpage.phoneText, "1234567890")
            .click(checkoutpage.continueButton)
            .click(checkoutpage.nextDayOption)
            .click(checkoutpage.nextShippingButton)
            .click(checkoutpage.nextPaymentButton)
            .click(checkoutpage.nextConfirmButton)
            .click(checkoutpage.confirmOrderButton)
            .expect(checkoutpage.orderConfirmationMessage.exists).ok()
            .click(checkoutpage.viewOrderDetailsLink)
            // my account
            .click(homepage.myAccountLink)
            .click(myordespage.orders)
    })

    test("Change Currency Test", async (t) => {
        await homepage.changeCurrency("Euro")
        await homepage.changeCurrency("US Dollar")
        await homepage.changeCurrency("Euro")
        // await t.takeScreenshot()
    })