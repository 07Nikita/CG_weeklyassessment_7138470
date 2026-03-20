import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let name= await page.locator('(//span[@class="a-size-base-plus a-color-base"])').first().textContent();
    let price= await page.locator('//span[@class="a-price-whole"]').first().textContent();
    console.log(name);
    console.log(price);
    await page.screenshot({path:`screenshot/task1${browserName}.png`})

    
})