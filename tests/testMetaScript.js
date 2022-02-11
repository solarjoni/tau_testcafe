fixture.meta('version', '1')("First ficture")
    .page("https://www.google.com/")
    
    test
    .meta('env', 'production')
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button")
    })
    
    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .click("#submit-button")
    })
