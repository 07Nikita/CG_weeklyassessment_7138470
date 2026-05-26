import { Locator, Page } from "@playwright/test"
import testData from "../data/data.json" 

class Support{
    page : Page
    helpbtn: Locator
    // busFAQ: Locator
    // FAQ: Locator
    // text: Locator
    // likebtn :Locator

    constructor(page: Page) {
        this.page=page
        this.helpbtn=page.locator('//a[@href="https://www.redbus.in/info/redcare"]')
        // this.busFAQ=page.locator('.Item').first()
        // this.FAQ=page.locator('.listItemContainer ').nth(testData.n)
        // this.text=page.locator('.contentText')
        // this.likebtn=page.locator('.tonalButton')
        

    }

    async help(){
        const [newPage]=await Promise.all([
        this.page.context().waitForEvent('page'),
        this.helpbtn.click()
    ]);

    await newPage.waitForLoadState()
     const frame = newPage.frameLocator('iframe[src*="help"]')

    const busFAQ = frame.locator(".Item").first()
    const FAQ = frame.locator(".listItemContainer").nth(testData.n)
    const text = frame.locator(".contentText")
    const likebtn = frame.locator(".tonalButton").first()
    // const busFAQ=newPage.locator('.Item').first()
    // const FAQ=newPage.locator('.listItemContainer').nth(testData.n)
    // const text=newPage.locator('.contentText')
    // const likebtn=newPage.locator('.tonalButton')

    await busFAQ.click()
    let Q=await FAQ.textContent()
    console.log(Q)
    await FAQ.click()
    let Q2=await FAQ.textContent()
    console.log(Q2)
    await FAQ.click()
    let T=await text.textContent()
    console.log(T)
    await likebtn.click()

    await newPage.screenshot({path:'helpsupport.png'})






    }
}

export default Support
