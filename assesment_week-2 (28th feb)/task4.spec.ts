import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020')
    await page.locator('//a[@data-cy="link-button"]').click()
    let count= await page.locator('//span[@data-cy="ocs-text-module" and @class="OcsText-styles__StyledText-sc-bf256156-0 cjPVFu text--sm-body"]').nth(6).textContent();
    console.log(count);
    await page.screenshot({path:`screenshot/task4${browserName}.png`})
})

    
