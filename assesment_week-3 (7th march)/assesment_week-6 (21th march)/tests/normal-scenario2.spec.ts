import { test, expect } from "@playwright/test"
import { SignupPage } from "../POM/SignupPage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../utility/signup.json"))
let data = JSON.parse(datafile)

test("signup-task", async ({ page }) => {

  const signupPage = new SignupPage(page)

  await page.goto(data.url)

  await signupPage.signupProcess(data.name, data.email)

  await signupPage.selectGender(data.gender)

  await signupPage.filldetails(data.password, data.day, data.month, data.year)

  await signupPage.filladdress(
    data.firstname,
    data.lastname,
    data.company,
    data.address1,
    data.address2,
    data.country,
    data.state,
    data.city,
    data.zipcode,
    data.mobile
  )
  await expect(page.locator("//b")).toContainText("Account Created!")

  await page.screenshot({ path: './screenshots/normal-scenario2.png' });

  await expect(signupPage.continuebtn).toBeVisible()
  
  await signupPage.submitSignup()

})