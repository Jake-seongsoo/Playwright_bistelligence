import {setup, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page,baseURL,loginpage}) => {
    await page.goto(`${baseURL}`);
    await loginpage.enterusername(data.wrongid_duplicate);
    await loginpage.enterpassword(data.successPassword);
    await loginpage.clickbtnlogin();
    expect(loginpage.welcomeInputPopup()).toHaveText('Welcome to GrandView Innovation')
    await loginpage.clickbtnlogin_confirm();


    await page.context().storageState({path: authFile});
})