import { Locator, Page } from "@playwright/test"

class Booking{
    page: Page
    account: Locator
    booking: Locator
    completed: Locator
    tripid: Locator
    wallet: Locator
    balance: Locator
    acc: Locator

     constructor(page: Page) {

        this.page = page
        this.account = page.getByRole('button',{name:'Account'})
        this.booking= page.locator('//div[@aria-label="Bookings" and @role="button"]')
        this.completed=page.locator('#Completed')
        this.tripid=page.locator('.tripid')
        this.wallet=page.locator('//li[@data-text="Wallet"]')
        this.balance=page.locator('.balanceval')
        this.acc=page.locator('#account_dd')

     }
     async pastbooking(){
        await this.account.click()
        await this.booking.click()
        await this.completed.click()
        let id= await this.tripid.textContent()
        await console.log(id);
        await this.acc.click()
        const [walletPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.wallet.click()
    ])
    await walletPage.waitForLoadState()
    const balance = walletPage.locator('.balanceval')
    let money = await balance.textContent()
    console.log("Wallet Balance:", money)
     }
}
export default Booking