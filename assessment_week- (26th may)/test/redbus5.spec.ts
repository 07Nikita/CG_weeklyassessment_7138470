import { test, expect } from "@playwright/test"
import Profile from "../pom/profile"
import RedbusSignup from "../pom/signup"


test("Redbus edit profile", async ({ page }) => {

    const profile = new Profile(page)
    const signup = new RedbusSignup(page)
    
    await page.goto('https://www.redbus.in/')

    await expect(page).toHaveURL('https://www.redbus.in/')

    await signup.navigateToSignup()

    await profile.changes()

})