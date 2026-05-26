import { test, expect } from "@playwright/test"
import Train from "../pom/train"

test("Redbus train booking", async ({ page }) => {

    const train = new Train(page)

    await page.goto('https://www.redbus.in/')

    await expect(page).toHaveURL('https://www.redbus.in/')

    await train.searchtrain()

    await train.choosetrain()

    await train.fillPassengerDetails()

    await page.screenshot({path:'trainbooking.png'})
})