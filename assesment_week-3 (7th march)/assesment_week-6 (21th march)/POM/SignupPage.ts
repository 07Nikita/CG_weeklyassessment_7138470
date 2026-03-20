import { Page, Locator } from "@playwright/test";

export class SignupPage {
  page: Page
  signupbtn: Locator
  name: any
  email: Locator
  signup: Locator
  password: Locator
  day: Locator
  month: Locator
  year: Locator
  firstname: Locator
  lastname: Locator
  company: Locator
  address1: Locator
  address2: Locator
  country: Locator
  state: Locator
  city: Locator
  zipcode: Locator
  mobile: Locator
  createacc: Locator
  continuebtn: Locator

  constructor(page: Page) {
    this.page = page;
    this.signupbtn = page.getByRole('link', { name: ' Signup / Login' });
    this.name = page.locator('//input[@data-qa="signup-name"]');
    this.email = page.locator('//input[@data-qa="signup-email"]');
    this.signup = page.getByRole('button', { name: 'Signup' });
    this.password = page.getByLabel('Password');
    this.day = page.locator('select[data-qa="days"]');
    this.month = page.locator('select[data-qa="months"]');
    this.year = page.locator('select[data-qa="years"]');
    this.firstname = page.getByLabel('First name');
    this.lastname = page.getByLabel('Last name');
    this.company = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('//select[@data-qa="country"]');
    this.state = page.getByLabel('State');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.getByLabel('Mobile Number');
    this.createacc = page.locator('//button[@data-qa="create-account"]');
    this.continuebtn = page.getByRole('link', { name: 'Continue' });
  }

  async signupProcess(name, email) {
    await this.signupbtn.click();
    await this.name.fill(name);
    await this.email.fill(email);
    await this.signup.click();
  }

  async selectGender(gender) {
    await this.page.getByRole('radio', { name: gender }).check();
  }

  async filldetails(password, day, month, year) {
    await this.password.fill(password);
    await this.day.selectOption(day);
    await this.month.selectOption(month);
    await this.year.selectOption(year);
  }

  async filladdress(
    firstname,
    lastname,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile
  ) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.company.fill(company);
    await this.address1.fill(address1);
    await this.address2.fill(address2);
    await this.country.selectOption(country);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipcode.fill(zipcode);
    await this.mobile.fill(mobile);
    await this.createacc.click();
  }

  async submitSignup() {
    await this.continuebtn.click();
  }
}































































// import {Page} from '@playwright/test';

// export class LoginPage {
//   constructor(page:Page) {}

//   signupLoginBtn = this.page.locator('a[href="/login"]');
//   emailInput = this.page.locator('input[data-qa="login-email"]');
//   passwordInput = this.page.locator('input[data-qa="login-password"]');
//   loginBtn = this.page.locator('button[data-qa="login-button"]');

//   // 🔹 Actions
//   async clickSignupLogin() {
//     await this.signupLoginBtn.click();
//   }

//   async enterEmail(email: string) {
//     await this.emailInput.fill(email);
//   }

//   async enterPassword(password: string) {
//     await this.passwordInput.fill(password);
//   }

//   async clickLogin() {
//     await this.loginBtn.click();
//   }

//   // 🔹 Reusable Method (Best Practice)
//   async login(email: string, password: string) {
//     await this.clickSignupLogin();
//     await this.enterEmail(email);
//     await this.enterPassword(password);
//     await this.clickLogin();
//   }
// }