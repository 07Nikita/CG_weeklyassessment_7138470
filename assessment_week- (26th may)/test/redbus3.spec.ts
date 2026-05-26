import { test, expect } from "@playwright/test"
import Support from "../pom/support"

test("Redbus help support", async ({ page }) => {

    const help = new Support(page)
    
    await page.goto('https://www.redbus.in/')

    await expect(page).toHaveURL('https://www.redbus.in/')

    await help.help()

})