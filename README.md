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
5.4 - npx testcafe chrome:headless tests
      npx "chrome:emulation:device=iphone X" tests
6.2 - --debug-on-fail (./tests/uploadFile.js)
6.3 - npx testcafe ./tests/screenshotDemo.js -t "third test" -s takeOnFails=true
6.4 - --video artifacts/video --video-options failedOnly=true
9.7 - npm run cucumber; node report-generator.js
10.1 - npx testcafe chrome <test_file> --reporter html:report.html
10.2 - npx testcafe chrome <test_file> --reporter allure
      ./node_modules/.bin/allure generate allure/allure-results --clean -o allure/allure-report && ./node_modules/.bin/allure open allure/allure-report

13 - docker run -v ${PWD}/Page_Model_Demo:/testCafeDemo -it testcafe/testcafe firefox /testCafeDemo/test/e2eTest.js
14 - npx testcafe remote test/setTestSpeed.js --qr-code
15.1 - curl https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml -o docker-compose.yml
      docker-compose -p reportportal up -d --force-recreate
      chmod 777 data/elasticsearch 
      chgrp 1000 data/elasticsearch 
15.2 npx testcafe test/setTestSpeed.js --reporter reportportal
