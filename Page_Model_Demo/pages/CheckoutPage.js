import { Selector } from "testcafe"

class CheckoutPage {
    constructor() {
        this.countryList = Selector("selectp[id='BillingNewAddress_COuntryId']")
        this.cityList = Selector("input[id='BillingNewAddress_City']")
        this.addressText = Selector("input[id='BillingNewAddress_Address1']")
        this.zipText = Selector("input[id='BillingNewAddress_ZipPostalCode']")
        this.phoneText = Selector("input[id='BillingNewAddress_PhoneNumber']")
        this.continueButton = Selector("input.button-1.new-address-next-step-button")
        this.nextDayOption = Selector("input[id='shippingoption_1']")
        this.nextShippingButton = Selector("input.button-1.shipping-method-next-step-button")
        this.nextPaymentButton = Selector("input.button-1.payment-method-next-step-button")
        this.nextConfirmButton = Selector("input.button-1.payment-info-next-step-button")
        this.confirmOrderButton = Selector("input.button-1.confirm-order-next-step-button")
        this.orderConfirmationMessage = Selector("strong").withText('Your order has been successfully processed!')
        this.viewOrderDetailsLink = Selector("a").withText("Click here for order details")

    }
}

export default new CheckoutPage()