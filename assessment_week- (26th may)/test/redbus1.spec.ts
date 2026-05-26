import { test, expect } from "@playwright/test"
import RedbusSignup from "../pom/signup"
import Booking from "../pom/booking"

test("Redbus Signup", async ({ page }) => {

    const signup = new RedbusSignup(page)
    const booking= new Booking(page)

    await page.goto('https://www.redbus.in/')

    await expect(page).toHaveURL('https://www.redbus.in/')

    await signup.navigateToSignup()

    await booking.pastbooking()

    await signup.logout()

    await page.screenshot({path:'logout.png'})




})