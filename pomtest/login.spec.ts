import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Login function Test", async() => {
    test.only("login validation",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await loginpage.focusLoginID();
        await loginpage.focusoutLoginID();
        expect(loginpage.validateID()).toHaveText("User ID is required.");

        await loginpage.focusLoginPassword();
        await loginpage.focusoutLoginPassword();
        expect(loginpage.validatePassword()).toHaveText("Password is required.");

        
        await loginpage.enterusername(data.id);
        await loginpage.enterpassword(data.wrongid_duplicate);
        await loginpage.clickbtnlogin();
        expect(loginpage.wrongInputPopup()).toHaveText('User ID or password is incorrect.')


    }) 
})