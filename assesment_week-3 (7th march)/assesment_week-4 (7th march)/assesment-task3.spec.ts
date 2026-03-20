import {test} from "@playwright/test"
test("task3", async ({page}) => {
await page.goto("https://www.cricbuzz.com/")
await page.locator("//a[@title='Live Cricket Score']").click()
await page.locator("(//a[@class='w-full bg-cbWhite flex flex-col p-3 gap-1'])[1]").click()
await page.locator("//a[@title='Scorecard']").click()   
   let name = await page.locator("(//a[@class='text-cbTextLink hover:underline text-sm tb:text-xs wb:text-sm'])[1]").textContent()
    console.log("name:",name);
   let score = await page.locator("(//div[@class='flex justify-center items-center font-bold text-sm  wb:text-sm'])[1]").textContent()
    console.log("score:",score);
})