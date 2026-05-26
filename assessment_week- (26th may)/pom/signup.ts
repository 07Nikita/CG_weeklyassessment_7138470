import { Locator, Page } from "@playwright/test"
import testData from "../data/data.json"

class RedbusSignup {

    page: Page
    account: Locator
    signupBtn: Locator
    phone: Locator
    cont: Locator
    verify: Locator
    acc: Locator
    logoutbtn: Locator

    constructor(page: Page) {

        this.page = page
        this.account = page.getByRole('button',{name:'Account'})
        this.signupBtn = page.getByRole('button', { name: 'Sign up' })
        this.phone = page.locator('//input[@type="tel"]')
        this.cont = page.getByText('Continue')
        this.verify= page.getByText('Verify OTP')
        this.acc=page.locator('#account_dd')
        this.logoutbtn=page.locator('#user_sign_out')
    }

    async navigateToSignup() {

        await this.account.click()
        await this.signupBtn.click()
        await this.phone.fill(testData.phone)
        await this.cont.click()
        await this.page.pause()
        await this.verify.click()    
}

async logout(){
    await this.acc.click()
    await this.logoutbtn.click()
}


}

export default RedbusSignup