import { Locator, Page } from "@playwright/test"
import testData from "../data/data.json" 

class Hotel{
    page : Page
    hotelbtn: Locator
    // shotel:Locator
    datebtn: Locator
    date: Locator
    date2: Locator
    search: Locator
    room: Locator
    price :Locator
    book: Locator
    fName: Locator
    lName: Locator
    email:Locator
    phone: Locator
    statebtn:Locator
    pay:Locator
    method:Locator

     constructor(page: Page) {
        this.page=page
        this.hotelbtn=page.locator('//a[@href="/hotels"]')
        // this.shotel=page.locator('.card___fb1bae.textLight___6bb2c7')
        this.datebtn=page.locator('.searchField___9bdbff ').nth(2)
        this.date=page.getByRole('button', { name: testData.checkin })
        this.date2=page.getByRole('button', { name: testData.checkout })
        this.search=page.locator('.primaryButton___d6c460  ').last()
        this.room=page.locator('.primaryButton___d6c460.selectRoomBtn___9b0759 ').nth(4)
        this.price=page.locator('.O5DzfddZ').last()
        this.book=page.locator('.m6YdlcJp')
        this.fName=page.getByRole('textbox', { name: 'Enter first name' })
        this.lName=page.getByRole('textbox', { name: 'Enter last name' })
        this.email=page.locator('//input[@data-booking-field="email"]')
        this.phone=page.locator('.Xa94t4e7')
        this.statebtn=page.locator('#guest-residence-state')
        this.pay=page.locator('#booking-proceed-to-pay-desktop')
        this.method=page.getByRole('radio', { name: 'Pay through QR code' })
     }

     async hotelbook(){
        await this.hotelbtn.click()
        // await this.shotel.click()
        await this.datebtn.click()
        await this.date.click()
        await this.date2.click()
        await this.search.click()
        await this.room.click()
        let price=await this.price.textContent()
        await console.log(price);
        await this.book.click()

        await this.fName.fill(testData.fname)
        await this.lName.fill(testData.lname)
        await this.email.fill(testData.email)
        await this.phone.fill(testData.phone)
        await this.statebtn.selectOption({ label: 'Rajasthan' });
        await this.pay.click()
        await this.method.click()
       await this.page.screenshot({path:'hotel.png'})
              
        
     }


    } export default Hotel