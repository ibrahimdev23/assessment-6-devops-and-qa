
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

    await driver.sleep(3000)
})


test('bots should appear when the all bots button is clicked',async () => {
    const allBotsBtn = await driver.findElement(By.id('see-all'))
    await allBotsBtn.click()
    const displayedBot = await driver.findElement(By.xpath('//div/[@id="all-bots"]/div[@class="bot-card outline"]'[1]))

    const displayed = await displayedBot.isDisplayed()

    expect(displayedBot.isDisplayed()).toBe(true)

    await driver.sleep(5000)
})

test('clicking the add to dou button displays the player deo id',async () => {
    const playAgainBtn = await driver.findElement(By.id('play-again'))
    await playAgainBtn.click()
    const choicesDiv = await driver.findElement(By.id('choices'))
    const choicesDisplying = await choicesDiv.isDisplayed()
    expect(choicesDisplying).toBe(false)

    await driver.sleep(3000)
})


test('clickig the draw button displays the choices div',async () => {
    const drawBtn = await driver.findElement(By.id("draw"))
    await drawBtn.click()
    const choicesDiv = await driver.findElement(By.id("choices"))
    const isDislaying = await choicesDiv.isDisplayed()
    expect(isDislaying).toBe(true)

    await driver.sleep(3000)
})

