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
    ("First Test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button")
        .navigateTo("https://google.com")
    })
    
    test
    // .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .click("#submit-button")
    })
