const {test, expect} = require('@playwright/test')

test('Browser context playwright', async({browser})=>{
    //chrome - plugins /cookies
    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demoqa.com/login")
})

test('Page context playwright1', async({page})=>{
    //chrome - plugins /cookies
    // const context= await browser.newContext()
    // const page = await browser.newPage()
    await page.goto("https://demoqa.com/login")
    await expect(page).toHaveTitle("DEMOQA")
})