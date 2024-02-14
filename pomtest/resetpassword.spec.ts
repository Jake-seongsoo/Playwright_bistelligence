import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Register function Test", async() => {
    test("[FRONT] Register001: Create user user_ID is missing",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        expect(resetpasswordpage.Infotext()).toHaveText("Please enter the email address registered during the create account application. Temporary password will be sent to your email.")
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    }) 
})