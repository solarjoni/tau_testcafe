import { Selector } from 'testcafe'

const fileUpload = Selector('input#file-upload')
const uploadFileButton = Selector('input#file-submit.button')

fixture("File Upload")
.page("https://the-internet.herokuapp.com/upload")

test('upload file test', async t => {
    await t
        .setFilesToUpload(fileUpload, '../upload/posture.jpg')
        .clearUpload(fileUpload)
        .setFilesToUpload(fileUpload, '../upload/posture.jpg')
        .click(uploadFileButton)
})