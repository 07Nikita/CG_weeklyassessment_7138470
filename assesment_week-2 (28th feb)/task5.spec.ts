import {test} from "@playwright/test"

test("task", async({page,browserName})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//i[@class="a-icon a-icon-checkbox"]').first().click()
    let name= await page.locator('//span[@class="a-size-base-plus a-color-base"]').nth(4).textContent();
    let price= await page.locator('//span[@class="a-price-whole"]').nth(4).textContent();
    console.log(name);
    console.log(price);
    
    await page.screenshot({path:`screenshot/task5${browserName}.png`})
})


    
    


    //i[@class="a-icon a-icon-checkbox"]
