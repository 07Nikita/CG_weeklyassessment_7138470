import { Page, Locator } from "@playwright/test";

export class ReviewPage {

  page: Page
  products: Locator
  nameInput: Locator
  emailInput: Locator
  reviewInput: Locator
  submitBtn: Locator
  successMsg: Locator

  constructor(page: Page) {
    this.page = page
    this.products = page.locator('.product-image-wrapper')
    this.nameInput = page.locator('#name')
    this.emailInput = page.locator('#email')
    this.reviewInput = page.locator('#review')
    this.submitBtn = page.getByRole('button', { name: 'Submit' })
    this.successMsg = page.locator('#review-section')
  }

  async viewProduct(index) {
    const product = this.products.nth(index)
    await product.getByText('View Product').click()
  }

  async addReview(name, email, review) {
    await this.nameInput.fill(name)
    await this.emailInput.fill(email)
    await this.reviewInput.fill(review)
    await this.submitBtn.click()
  }
}