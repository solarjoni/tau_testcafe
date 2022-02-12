fixture('Set PAge Timeout Fixture')
    .page("https://devexpress.github.io/testcafe/example/")

    test('set page timeout test', async t => {
        await t
            .setPageLoadTimeout(50)
            .navigateTo("https://google.com")
    })
