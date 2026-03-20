import { Page, Locator } from "@playwright/test";

export class login {

  page: Page
  loginBtn: Locator
  emailInput: Locator
  passwordInput: Locator
  loginSubmit: Locator
  womenMenu: Locator
  dressCategory: Locator
  products: Locator
  addToCartBtn: Locator
  viewCart: Locator
  cartItems: Locator
  removeBtn:Locator

  constructor(page: Page) {
    this.page=page
    this.loginBtn=page.getByRole('link',{name:' Signup / Login'})
    this.emailInput=page.locator('//input[@data-qa="login-email"]')
    this.passwordInput=page.locator('//input[@data-qa="login-password"]')
    this.loginSubmit=page.getByRole('button',{name:'Login'})
    this.womenMenu=page.getByRole('link',{name:'Women'})
    this.dressCategory=page.getByRole('link',{name:'Dress'})
    this.products=page.locator('.product-image-wrapper')
    this.addToCartBtn=page.getByText('Add to cart')
    this.viewCart=page.getByRole('link',{name:'View Cart'})
    this.cartItems=page.locator('.cart_description')
    this.removeBtn=page.locator('.cart_quantity_delete')
  }

  async login(email, password) {
    await this.loginBtn.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginSubmit.click()
  }

  async navigateToWomenDress() {
    await this.womenMenu.click()
    await this.dressCategory.click()
  }

  async selectProduct(index) {
    const product=this.products.nth(index)
    await product.hover()
    await product.getByText('Add to cart').first().click()
  }

  async goToCart() {
    await this.viewCart.click()
  }
   
  async clearCart() {
  let count=await this.removeBtn.count()

  for (let i=0;i<count;i++) {
    await this.removeBtn.first().click()
  }
}

}