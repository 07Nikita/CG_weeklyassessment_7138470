import {test} from "@playwright/test"

test("task2", async({page,browserName})=>{
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020')
    await page.locator('//a[@data-cy="link" and .="All Athletes" ]').click()
    let silver=await page.locator('//div[@data-medal-id="silver-medals-7"]').textContent()
    let ath=await page.locator('//h3[@data-cy="athlete-name" and .="ZHANG Yufei"]').textContent()
    console.log("athelet:",ath);
    
    console.log("silver-medal:",silver);
})