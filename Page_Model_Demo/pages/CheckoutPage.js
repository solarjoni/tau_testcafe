import { Selector, t } from "testcafe"

class CheckoutPage {
    constructor() {
        this.countryList = Selector("select[id='BillingNewAddress_CountryId']")
        this.cityText = Selector("input[id='BillingNewAddress_City']")
        this.addressText = Selector("input[id='BillingNewAddress_Address1']")
        this.zipText = Selector("input[id='BillingNewAddress_ZipPostalCode']")
        this.phoneText = Selector("input[id='BillingNewAddress_PhoneNumber']")
        this.continueButton = Selector("#billing-buttons-container button.new-address-next-step-button")
        this.nextDayOption = Selector("input[id='shippingoption_1']")
        this.nextShippingButton = Selector("#shipping-method-buttons-container button.shipping-method-next-step-button")
        this.nextPaymentButton = Selector("#payment-method-buttons-container button.payment-method-next-step-button")
        this.nextConfirmButton = Selector("button.payment-info-next-step-button")
        this.confirmOrderButton = Selector("button.confirm-order-next-step-button")
        this.orderConfirmationMessage = Selector("strong").withText('Your order has been successfully processed!')
        this.viewOrderDetailsLink = Selector("a").withText("Click here for order details")
    }

    async selectCountry(country) {
        const countryOption = this.countryList.find("option")
        await t
            .click(this.countryList)
            .click(countryOption.withText(country))
    }
}

export default new CheckoutPage()