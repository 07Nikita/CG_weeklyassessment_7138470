import {test,expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'

const data=fs.readFileSync(path.join(__dirname,'../testdata/students.json'))
const students=JSON.parse(data)

test('registration form',async({page})=>{
  for (let student of students) {
    await page.goto('https://demoqa.com/automation-practice-form')
    await page.fill('#firstName', student.firstName)
    await page.fill('#lastName', student.lastName)
    await page.fill('#userEmail', student.email)
    await page.locator(`label:has-text("${student.gender}")`).click()
    await page.fill('#userNumber', student.phone)
await page.click("#dateOfBirthInput");
    await page.locator(".react-datepicker__year-select").selectOption(student.dob_year);
    await page.locator(".react-datepicker__month-select").selectOption(student.dob_month);
    await page.click(`.react-datepicker__day--${student.dob_day}`)
    await page.locator(`label:has-text("${student.hobby}")`).click()
    await page.setInputFiles("#uploadPicture",  "C:/Users/nikit/Desktop/hike/IMG_5263.JPG")
    await page.fill('#currentAddress', student.address)
    await page.click('#state')
    await page.locator(`text=${student.state}`).click()
    await page.click('#city')
    await page.locator(`text=${student.city}`).click()
    await page.click('#submit')
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible()
    const modalText = await page.locator('.table').textContent()
    expect(modalText).toContain(student.firstName)
    expect(modalText).toContain(student.lastName)
    expect(modalText).toContain(student.email)
    expect(modalText).toContain(student.phone)
    expect(modalText).toContain(student.address)
    await page.click('#closeLargeModal')
  }
})