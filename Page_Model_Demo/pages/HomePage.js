import { Selector, t} from "testcafe"

class HomePage {
    constructor() {
        this.subtitleHeader = Selector("h2").withText("Welcome to our store")
        this.registerLink = Selector("a").withText("Register")
        this.loginLink = Selector("a").withText("Log in")
        this.cartLink = Selector("a").withText("Shopping cart")
        this.myAccountLink = Selector("a").withText("My account")
        this.logoutLink = Selector("a").withText("Log out")
        
        this.currencySelect = Selector("#customerCurrency")
        this.currencyOption = this.currencySelect.find("option")
    }

    get productSearch() {
        return Selector("input[id='small-searchterms']")
    }

    async search(product) {
        await t
            .typeText(this.productSearch, product)
            .wait(3000)
            .pressKey("enter")
            .takeScreenshot()
    }

    async changeCurrency(currency) {
        let num
        if (currency == "Euro") {
             num = 1
        } else {
            num = 0
        }
        await t
        // .setTestSpeed(0.1)
        .click(this.currencySelect)
        // .click(Selector("option", { text: currency })) // not working
        // .click(Selector('option').filter("[value='Euro']")) // not working
        .click(this.currencyOption.withText(currency))
        // get the selected option
        // const selectedOption = this.currencyOption
        //     .filter((option) => {
        //     if (option && option.selected) {
        //         return true;
        //     }
        //     return false;
        //     })
        //     .nth(0);
        // const selectedOptionContent = await selectedOption.textContent;
        // await t.expect(selectedOptionContent).eql(currency)
        await t.expect(this.currencyOption.nth(num).innerText).eql(currency)
    }
}

export default new HomePage()