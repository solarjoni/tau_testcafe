import { Selector, t } from "testcafe"

class RegisterPage {
    constructor() {
        this.genderOption = Selector("#gender-male")
        this.firstName = Selector("#FirstName")
        this.lastName = Selector("#LastName")
        this.dateOfBirthDayList = Selector("select[name='DateOfBirthDay']")
        this.dateOfBirthMonthList = Selector("select[name='DateOfBirthMonth']")
        this.dateOfBirthYearList = Selector("select[name='DateOfBirthYear']")
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.confirmPassword = Selector("#ConfirmPassword")
        this.registerButton = Selector("#register-button.button-1.register-next-step-button")
        this.successfullMessage = Selector("div.result").withText("Your registration completed")
    }
    
    async selectDay(day) {
        const DaysOption = this.dateOfBirthDayList.find("option")
        await t
            .click(this.dateOfBirthDayList)
            .click(DaysOption.withText(day))
    }
    async selectMonth(month) {
        const MonthsOption = this.dateOfBirthMonthList.find("option")
        await t
            .click(this.dateOfBirthMonthList)
            .click(MonthsOption.withText(month))
    }
    
    async selectYear(year) {
        const YearsOption = this.dateOfBirthYearList.find("option")
        await t
            .click(this.dateOfBirthYearList)
            .click(YearsOption.withText(year))
    }
}

export default new RegisterPage()