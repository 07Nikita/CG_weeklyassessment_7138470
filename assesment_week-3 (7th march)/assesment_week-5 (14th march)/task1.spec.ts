import {test,expect} from '@playwright/test'
import fs from 'fs'
import path from "path"

let prod=fs.readFileSync(path.join(__dirname,"../testdata/products.json"))
let products=JSON.parse(prod)

test('amazon',async({page,context})=>{
  await page.goto('https://www.amazon.com/')
  for (let item of products) {
    await page.locator('#twotabsearchtextbox').fill(item.product)
    await page.locator('#nav-search-submit-button').click()
    let firstProduct=page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').first()
    let resultTitle=await firstProduct.textContent()
    console.log("First product in results:",resultTitle)
    let [newPage]=await Promise.all([
    page.waitForEvent("popup"),
    firstProduct.click()
])
    let title=newPage.locator('#productTitle').first()
    await expect(title).toBeVisible()

    let price=newPage.locator('//span[@class="a-price-whole"]').first()
    await expect(price).toBeVisible()

    let rating=newPage.locator('//span[@class="a-size-small a-color-base"]').first()
    await expect(rating).toBeVisible()

    console.log("Product Title:",await title.textContent())
    console.log("Price:",await price.textContent())
    console.log("Rating:",await rating.textContent())

    await newPage.close()

    await page.locator('#twotabsearchtextbox').fill('')
  }

})