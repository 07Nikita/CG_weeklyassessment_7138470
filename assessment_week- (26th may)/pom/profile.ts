import { Locator, Page } from "@playwright/test"
import testData from "../data/data.json" 


class Profile{
    page: Page
    account: Locator
    info: Locator
    edit: Locator
    name:Locator
    // dob:Locator
    email:Locator
    gender:Locator
    save:Locator
    

     constructor(page: Page) {

        this.page = page
        this.account = page.getByRole('button',{name:'Account'})
        this.info=page.getByRole('button', { name: 'Personal information' })
        this.edit=page.locator('.editMode')
        this.name=page.locator('#profile-displayName')
        // this.dob=page.locator('#profile-DOB')
        this.email=page.locator('#profile-conemail')
        this.gender=page.locator('.radio_btn').last()
        this.save=page.locator('#Savebtn')
        
    }

    async changes(){
        await this.account.click()
        await this.info.click()
        await this.edit.click()
        await this.name.fill(testData.fname)
        // await this.dob.click()
        await this.email.fill(testData.email)
        await this.gender.check()
        await this.save.click()
        await this.page.screenshot({path:'profile.png'})
        
    }

     }
     export default Profile