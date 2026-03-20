import { test, expect } from "@playwright/test"
import { ReviewPage } from "../POM/reviewPage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../utility/review.json"))
let data = JSON.parse(datafile)

test("View product and add review (without login)", async ({ page }) => {

  const review = new ReviewPage(page)

  await page.goto(data.url)

  await expect(page).toHaveURL(data.url)

  await review.viewProduct(data.productIndex)

  await expect(page.locator("text=Write Your Review")).toBeVisible()

  await review.addReview(data.name, data.email, data.review)

  await expect(page.locator("text=Thank you for your review.")).toBeVisible()

  await page.screenshot({
    path: "screenshots/normal-scenario1.png",
    fullPage: true
  })

})