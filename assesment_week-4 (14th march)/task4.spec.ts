import {test,expect} from "@playwright/test";
import fs from "fs";
import path from "path";

let datafile=fs.readFileSync(path.join(__dirname,"../testdata/bookUser.json"),"utf-8");
let users=JSON.parse(datafile);

test("task4",async({page})=>{
  await page.goto("https://demoqa.com/books");
  for(let user of users){
    await page.click("#login");
    await page.click("#newUser");
    await page.fill("#firstname", user.firstname);
    await page.fill("#lastname", user.lastname);
    await page.fill("#userName", user.username);
    await page.fill("#password", user.password);
    await page.pause();
    await page.click("#register");
    await page.click("#gotologin");
    await page.fill("#userName", user.username);
    await page.fill("#password", user.password);
    await page.click("#login");
    await expect(page.locator("#userName-value")).toBeVisible();
    await page.click("text=Go To Book Store");
    await page.fill("#searchBox", user.book);
    await page.click(`text=${user.book}`);
    await page.click("text=Add To Your Collection");
    page.on("dialog", async dialog => {
        await dialog.accept();
    });
    await page.click("text=Profile");
    await expect(page.locator(`text=${user.book}`)).toBeVisible();
    await page.click("#submit");
    await expect(page.locator("#login")).toBeVisible();
  }
});