import { Selector } from 'testcafe'

const developerName = Selector("#developer-name")
const osOption = Selector("#macos")
const submitButton = Selector("#submit-button")

fixture("First ficture")
    .page("https://devexpress.github.io/testcafe/example/")

test("First Test", async t => {
    const developerNameElement = 
    await developerName.with({visibilityCheck: true})()
    await t
    .setTestSpeed(0.1)
    .expect(developerNameElement.value).eql("", "input is empty")
    .typeText(developerName, "TAU")
    .expect(developerName.value).eql("TAU", "input equals 'TAU' ")
    .takeElementScreenshot(developerName)
    .click(osOption)
    .click(submitButton)
})