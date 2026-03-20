import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('input[type="text"]').first().fill("phones")
    await page.locator('button[type="submit"]').click()
    await page.locator('//div[@class="ybaCDx"]').first().click()
    let price= await page.locator('//div[@class="hZ3P6w DeU9vF"]').nth(3).textContent();
    console.log(price);
    await page.screenshot({path:`screenshot/task2${browserName}.png`})
})
