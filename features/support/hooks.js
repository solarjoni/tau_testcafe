const fs = require("fs")
const createTestCafe = require("testcafe")
const testControllerHolder = require("./testControllerHolder")
const { AfterAll, setDefaultTimeout, Before, After, Status } = require("@cucumber/cucumber")
const errorHandling = require("./errorHandling")
const TIMEOUT = 2*30000

let isTestCafeError = false
let attachScreenshotToReport = null
let cafeRunner = null
let n = 0

function createTestFile() {
    fs.writeFileSync("test.js",
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function(tc) {
            cafeRunner = tc
            const runner = tc.createRunner()
            return runner
                .src("./test.js")
                .screenshots("reports/screenshots/", true)
                .browsers(browser)
                .run()
                .catch(function(error) {
                    // console.error(error)
                    console.log(error)
                })
        })
        .then(function(report) {
            console.log("Reporting...")
        })
}

setDefaultTimeout(TIMEOUT)

Before(function() {
    runTest(n, this.setBrowser())
    createTestFile()
    n += 2
    return this.waitForTestController
        .then(function(testController) {
        return testController //.maximizeWindow()
    })
})

After(function() {
    fs.unlinkSync("test.js")
    testControllerHolder.free()
})

After(function(testCase) {
    const world = this
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true
        attachScreenshotToReport = world.attachScreenshotToReport
        errorHandling.addErrorToController()
        errorHandling.ifErrorTakeScreenshot(testController)
    }
})

AfterAll(function() {
    let intervalId = null

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500)
    }

    function checkLastResponse() {
        if(testController.testRun.lastDriverStatusResponse === "test-done-confirmation") {
            cafeRunner.close()
            process.exit()
            clearInterval(intervalId)
        }
    }

    waitForTestCafe()
})

const getIsTestCafeError = function() {
    return isTestCafeError
}

const getAttachScreenshotToReport = function(path) {
    return attachScreenshotToReport(path)
}

exports.getIsTestCafeError = getIsTestCafeError
exports.getAttachScreenshotToReport = getAttachScreenshotToReport