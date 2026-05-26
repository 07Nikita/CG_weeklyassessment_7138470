import { test, expect } from "@playwright/test"
import Hotel from "../pom/hotel"

test("Redbus hotel booking", async ({ page }) => {

    const hotel = new Hotel(page)
    
    await page.goto('https://www.redbus.in/')

    await expect(page).toHaveURL('https://www.redbus.in/')

    await hotel.hotelbook()

})