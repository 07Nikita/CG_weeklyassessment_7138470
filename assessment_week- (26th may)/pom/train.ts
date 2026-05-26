import { Locator, Page } from "@playwright/test"
import testData from "../data/data.json"

class Train {
    page: Page
    trainbtn: Locator
    frombtn: Locator
    fromip: Locator
    // tobtn:Locator
    toip:Locator
    datebtn:Locator
    date: Locator
    search:Locator
    class:Locator
    checkbox: Locator
    // irctcUser: Locator
    passengerName: Locator
    gender: Locator
    age: Locator
    email: Locator
    phone: Locator
    // addPassenger: Locator
    noRefund: Locator
    cont: Locator
    

    constructor(page: Page) {
        this.page = page
        this.trainbtn = page.locator('//a[@href="https://www.redbus.in/railways"]').first()
        this.frombtn = page.getByText('From', { exact: true })
        this.fromip=page.getByRole('button', { name: testData.from })
        // this.tobtn=page.locator('#destinput').first()
        this.toip=page.getByRole('button', { name: testData.to })
        this.datebtn=page.getByRole('combobox', { name: 'Date of Journey' })
        this.date=page.getByLabel(testData.date)
        this.search=page.locator('.primaryButton___aef317.searchButtonWrapper___5c2417 ')
        this.checkbox=page.locator('#switch')
        this.class=page.locator('.bodyWrap___48d252.waiting___372226').nth(testData.n)
        // this.irctcUser=page.locator('//input[@placeholder="IRCTC Username"]')
        this.passengerName=page.getByRole('textbox', { name: 'Name', exact: true })
        this.gender=page.getByRole('radio', { name: testData.gender })
        this.age=page.locator('//input[@inputmode="numeric"]').first()
        this.email=page.locator('//label[@for="email"]')
        this.phone=page.locator('//input[@inputmode="numeric"]').last()
        // this.addPassenger=page.getByText('Add to passengers list')
        this.noRefund= page.getByText("I don't want full fare refund")
        this.cont=page.locator('//button[@class="primaryButton___aef317  "  and @tabindex="0" ]').last()

    }

    async searchtrain() {

        await this.trainbtn.click()
        await this.frombtn.click()
        await this.fromip.click()
        // await this.tobtn.click()
        await this.toip.click()
        await this.datebtn.click()
        await this.date.click()
        await this.search.click()
    }

    async choosetrain(){
        await this.checkbox.check()
        await this.class.click()
    }

    async fillPassengerDetails() {
    // await this.irctcUser.fill(testData.irctcUsername)
    await this.passengerName.fill(testData.passengerName)
    await this.gender.click()
    await this.age.fill(testData.age)
    // await this.addPassenger.click()
    await this.email.fill(testData.email)
    await this.phone.fill(testData.phone)
    await this.page.screenshot({path:'trainbook.png'})
    await this.noRefund.click()
    await this.cont.click()
    await this.page.pause()
}
}

export default Train