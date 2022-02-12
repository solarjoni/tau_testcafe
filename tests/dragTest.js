import { Selector } from 'testcafe'

const triedCheckbox = Selector('label').withText("I have tried TestCafe")
const slider = Selector('#slider') 

fixture('Drag Fixture')
.page('https://devexpress.github.io/testcafe/example/')

test('drag test', async t => {
    await t
        .setTestSpeed(0.1)
        .click(triedCheckbox)
        .drag(slider, 500, 0, {offsetX:10, offsetY:10})
})