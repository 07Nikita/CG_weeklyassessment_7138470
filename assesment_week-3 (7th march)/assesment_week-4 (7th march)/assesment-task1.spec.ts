import {test} from '@playwright/test';

test('Question 2', async ({page}) => {
    await page.goto('https://www.icc-cricket.com/rankings/batting/womens/odi');
    const smritiRank = await page.locator('(//a[contains(@href,"smriti-mandhana")]//span | //a[contains(@href,"smriti-mandhana")]/ancestor::div[contains(@class,"justify-between")]//span[text()="790"])[1]').textContent();
    await page.screenshot({path: "olympics.png", fullPage:true})
    console.log(smritiRank);
     await page.screenshot({path:"Question 2.png", fullPage:true})
})
    
    