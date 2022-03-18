
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

//Check that clicking the Draw button displays the div with id = “choices”
test('clickig the draw button displays the choices div',async () => {
    const drawBtn = await driver.findElement(By.id("draw"))
    await drawBtn.click()
    const choicesDiv = await driver.findElement(By.id("choices"))
    const isDislaying = await choicesDiv.isDisplayed()
    expect(isDislaying).toBe(true)

    await driver.sleep(5000)
})

//Check that clicking the play again button resets the game 
test('clicking the add to dou button displays the player deo id',async () => {
        const playAgainBtn = await driver.findElement(By.id('play-again'))
        await playAgainBtn.click()
        const choicesDiv = await driver.findElement(By.id('choices'))
        const choicesDisplying = await choicesDiv.isDisplayed()
        expect(choicesDisplying).toBe(false)

        await driver.sleep(5000)
})
