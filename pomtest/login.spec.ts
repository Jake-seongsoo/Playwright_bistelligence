import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Login function Test", async() => {
    test.only("login",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await loginpage.focusLoginID();
        await loginpage.focusoutLoginID();
    }) 
})