import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.locator('input#name').fill("Nikita")
    await page.locator('input#email').fill("Nikita123@gmail.com")
    await page.locator('input#password').fill("password123")
    await page.locator('button[type="submit"]').click()
    await page.locator('input#email').fill("Nikita123@gmail.com")
    await page.locator('input#password').fill("password123")
    await page.locator('button[type="submit"]').click()
    await page.screenshot({path:`screenshot/task3${browserName}.png`})
})

    

