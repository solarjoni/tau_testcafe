Testcafe playground 

4.2 - npx testcafe chrome tests/testMetaScript.js --test-meta env=production
5.1 - npx testcafe all tests
    npx testcafe chrome,safari tests
    npx testcafe all tests --skip-js-error
5.2 - npx testcafe -c 3 chrome tests // concurrent run
    npx testcafe -c 4 safari,firefox tests // edge not supported 2022 02
    npx testcafe chrome tests -L // Live Mode
5.3 - npx testcafe chrome tests -t "Name of the test"
    runner.filter method:
    await runner
        .browsers('chrome')
        .src('./tests/sample-fixture.js')
        .filter(testName => testName === 'Click a label')
        .run()