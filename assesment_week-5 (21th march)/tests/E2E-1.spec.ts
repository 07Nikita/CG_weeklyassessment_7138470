
import {test,expect} from "@playwright/test"
import {login} from "../POM/loginPage"
import fs from "fs"
import path from "path"

let datafile=fs.readFileSync(path.join(__dirname, "../utility/login.json"))
let data=JSON.parse(datafile)

test("shopping flow",async({page})=>{

  const shop=new login(page)

  await page.goto(data.url)

  await expect(page).toHaveURL(data.url)

  await shop.login(data.email,data.password)

  await expect(page.getByText("Logout")).toBeVisible()

  await shop.navigateToWomenDress()

  await expect(shop.products.first()).toBeVisible()

  await shop.selectProduct(data.firstProductIndex)

  await shop.goToCart()

  await expect(shop.cartItems).toHaveCount(1)

  await page.goBack()

  await shop.selectProduct(data.secondProductIndex)

  await shop.goToCart()
  
  await page.screenshot({ 
    path: "screenshots/women-cart.png",
    fullPage: true 
  })
  
  await shop.clearCart()

  await expect(page.locator("text=Cart is empty")).toBeVisible()

})