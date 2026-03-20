//! END to end scinario

import { test, expect } from "@playwright/test"
import { CheckoutPage } from "../POM/checkoutPage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../utility/checkout.json"))
let data = JSON.parse(datafile)

test("Checkout and Payment Flow", async ({ page }) => {

  let shop = new CheckoutPage(page)

  await page.goto(data.url)

  await expect(page).toHaveURL(data.url)

  await shop.login(data.email, data.password)

  await expect(page.getByText("Logout")).toBeVisible()

  await shop.addProduct(data.productIndex)

  await shop.goToCart()

  await expect(page.locator('.cart_description')).toHaveCount(1)

  await shop.checkout()

  await expect(shop.nameOnCard).toBeVisible()

  await shop.fillPayment(
    data.nameOnCard,
    data.cardNumber,
    data.cvc,
    data.expiryMonth,
    data.expiryYear
  )

  await page.screenshot({
    path: "screenshots/order-success.png",
    fullPage: true
  })

})