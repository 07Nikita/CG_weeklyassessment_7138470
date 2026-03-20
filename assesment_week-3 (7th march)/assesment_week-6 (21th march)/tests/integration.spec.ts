//! INTEGRATION scinario

import { test, expect } from "@playwright/test"
import { login } from "../POM/loginPage"
import { CheckoutPage } from "../POM/checkoutPage"
import { DeleteAccount } from "../POM/deletePage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../utility/integration.json"))
let data = JSON.parse(datafile)

test("Login + Add to Cart + Delete Account Integration", async ({ page }) => {

  const log = new login(page)
  const shop = new CheckoutPage(page)
  const del = new DeleteAccount(page)

  await page.goto(data.url)
  
  await expect(page).toHaveURL(data.url)

  await log.login(data.email, data.password)

  await expect(page.getByText("Logout")).toBeVisible()

  await shop.addProduct(data.productIndex)

  await shop.goToCart()

  await expect(page.locator('.cart_description')).toHaveCount(1)

  await del.deleteAccount()

  await page.screenshot({
    path: "screenshots/integration.png",
    fullPage: true
  })

})