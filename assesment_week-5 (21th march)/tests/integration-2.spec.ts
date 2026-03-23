import {test,expect} from "@playwright/test"
import {SignupPage} from "../POM/signupPage"
import {ReviewPage} from "../POM/reviewPage"
import {DeleteAccount} from "../POM/deletePage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../utility/integration-2.json"))
let data = JSON.parse(datafile)

test("Signup + Review + Delete Account Integration",async({page})=>{
  const signup = new SignupPage(page)
  const review = new ReviewPage(page)
  const del = new DeleteAccount(page)

  await page.goto(data.url)

  await expect(page).toHaveURL(data.url)

  await signup.signupProcess(data.name, data.email)

  await signup.selectGender(data.gender)

  await signup.filldetails(
    data.password,
    data.day,
    data.month,
    data.year
  )

  await signup.filladdress(
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

  await signup.submitSignup()

  await page.getByRole('link',{ name:' Products'}).click()

  await review.viewProduct(data.productIndex)

  await review.addReview(
    data.name,
    data.email,
    data.review
  )

  await del.deleteAccount()

  await page.screenshot({
    path: "screenshots/integration-2.png",
    fullPage: true
  })

})