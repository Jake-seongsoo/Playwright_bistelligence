import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Login function Test", async() => {
    test("[FRONT] Login001: Login ID is empty validation",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await loginpage.focusLoginID();
        await loginpage.focusoutLoginID();
        expect(loginpage.validateID()).toHaveText("User ID is required.");
    }) 

    test("[FRONT] Login002: Login Password is empty validation",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await loginpage.focusLoginPassword();
        await loginpage.focusoutLoginPassword();
        expect(loginpage.validatePassword()).toHaveText("Password is required.");
    }) 

    test("[FRONT] Login003: Login Password is not matched validation",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);     
        await loginpage.enterusername(data.id);
        await loginpage.enterpassword(data.wrongid_duplicate);
        await loginpage.clickbtnlogin();
        expect(loginpage.welcomeInputPopup()).toHaveText('User ID or password is incorrect.')
    }) 
    test("[FRONT] Login004: successful_login",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await loginpage.enterusername(data.wrongid_duplicate);
        await loginpage.enterpassword(data.successPassword);
        await loginpage.clickbtnlogin();
        expect(loginpage.welcomeInputPopup()).toHaveText('Welcome to GrandView Innovation')
        await loginpage.clickbtnlogin_confirm();
        expect(loginpage.ShowGNB()).toBeVisible();
    })
    test("[FRONT] Login005: check copyright",async({page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}`);
        await expect(loginpage.showCopyright()).toHaveText("Copyrightⓒ Aidentyx. All Rights Reserved.")
    })
})