fixture("First ficture")
    .page("https://devexpress.github.io/testcafe/example")
    .beforeEach(async t => {
        await t
            // .maximizeWindow() // hangs!
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0)
    })
    
    test
    .meta('env', 'production')
    // .page("https://devexpress.github.io/testcafe/example/")
    ("first test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        // .takeScreenshot()
        .click("#submit-button")
        .navigateTo("https://google.com")
    })
    
    test
    // .page("https://devexpress.github.io/testcafe/example/")
    ("second test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .takeScreenshot()
        .click("#submit-button")
    })
    
    test
    // .page("https://devexpress.github.io/testcafe/example/")
    ("third test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        // .takeElementScreenshot("#submit-button")
        .takeScreenshot()
        .click("#submit-button")
    })
