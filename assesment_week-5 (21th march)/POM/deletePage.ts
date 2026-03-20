import { Page, Locator } from "@playwright/test";

export class DeleteAccount {

  page: Page
  deleteBtn: Locator

  constructor(page: Page) {
    this.page = page
    this.deleteBtn = page.getByRole('link',{name:' Delete Account'})
  }

  async deleteAccount() {
    await this.deleteBtn.click()
  }

}