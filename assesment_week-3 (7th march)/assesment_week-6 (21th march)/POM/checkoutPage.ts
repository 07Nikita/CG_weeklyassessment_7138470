import {Page,Locator} from "@playwright/test";

export class CheckoutPage {

  page: Page
  loginBtn: Locator
  emailInput: Locator
  passwordInput: Locator
  loginSubmit: Locator
  products: Locator
  viewCart: Locator
  checkoutBtn: Locator
  placeOrderBtn: Locator
  nameOnCard: Locator
  cardNumber: Locator
  cvc: Locator
  expiryMonth: Locator
  expiryYear: Locator
  payBtn: Locator

  constructor(page: Page) {
    this.page =page
    this.loginBtn=page.getByRole('link', { name: ' Signup / Login' })
    this.emailInput=page.locator('input[data-qa="login-email"]')
    this.passwordInput=page.locator('input[data-qa="login-password"]')
    this.loginSubmit=page.getByRole('button', { name: 'Login' })
    this.products=page.locator('.product-image-wrapper')
    this.viewCart=page.getByRole('link', { name: 'View Cart' })
    this.checkoutBtn=page.getByText('Proceed To Checkout')
    this.placeOrderBtn=page.getByText('Place Order')
    this.nameOnCard=page.locator('input[data-qa="name-on-card"]')
    this.cardNumber=page.locator('input[data-qa="card-number"]')
    this.cvc=page.locator('input[data-qa="cvc"]')
    this.expiryMonth=page.locator('input[data-qa="expiry-month"]')
    this.expiryYear=page.locator('input[data-qa="expiry-year"]')
    this.payBtn=page.getByText('Pay and Confirm Order')

  }

  async login(email, password) {
    await this.loginBtn.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginSubmit.click()
  }

  async addProduct(index) {
    const product = this.products.nth(index)
    await product.hover()
    await product.locator('.add-to-cart').first().click()
  }

  async goToCart() {
    await this.viewCart.click()
  }

  async checkout() {
    await this.checkoutBtn.click()
    await this.placeOrderBtn.click()
  }

  async fillPayment(name, number, cvc, month, year) {
    await this.nameOnCard.fill(name)
    await this.cardNumber.fill(number)
    await this.cvc.fill(cvc)
    await this.expiryMonth.fill(month)
    await this.expiryYear.fill(year)
    await this.payBtn.click()
  }

}