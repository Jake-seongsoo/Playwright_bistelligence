import {test, expect} from "../base/pomFixture";
import ResetpasswordPage from "../pages/resetpasswordPage";
import * as data from "../test-data/login.json"

test.describe("podo Resetpassword function Test", async() => {
    test("[FRONT] Resetpassword001: resetpassword Info text",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        expect(resetpasswordpage.Infotext()).toHaveText("Please enter the email address registered during the create account application. Temporary password will be sent to your email.")
    }) 
    test("[FRONT] Resetpassword002: resetpassword userid is  missing",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await (resetpasswordpage.focusID());
        await (resetpasswordpage.focusoutID());
        expect(resetpasswordpage.validateID()).toHaveText("User ID is required.")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword003: resetpassword user email is missing",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await (resetpasswordpage.focusEmail());
        await (resetpasswordpage.focusoutEmail());
        expect(resetpasswordpage.validateEmail()).toHaveText("Email is required.")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword004: resetpassword user id is incorrect",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterID(data.wrongemail));
        await (resetpasswordpage.focusoutID());
        expect(resetpasswordpage.validateID()).toHaveText("The user ID is incorrect. Please try again.")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword005: resetpassword invaild email format",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterEmail(data.wrongemail));
        await (resetpasswordpage.focusoutEmail());
        expect(resetpasswordpage.validateEmail()).toHaveText("Incorrect email format")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword006: resetpassword ID Correct, but Email Incorrect",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterID(data.wrongid_duplicate));
        await (resetpasswordpage.enterEmail(data.resetpw_wrongemail));
        await (resetpasswordpage.focusoutEmail());
        expect(resetpasswordpage.validateEmail()).toHaveText("The user ID or email is incorrect. Please try again. ")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword007: resetpassword unRegistered ID, but Email correct",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterID(data.resetpw_unregisterID));
        await (resetpasswordpage.enterEmail(data.resetpw_registeredemail));
        await (resetpasswordpage.focusoutEmail());
        expect(resetpasswordpage.validateEmail()).toHaveText("The user ID or email is incorrect. Please try again. ")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword008: resetpassword Registered ID, Email correct But not matched with userID",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterID(data.resetpw_Incorrectuser));
        await (resetpasswordpage.enterEmail(data.resetpw_registeredemail));
        await (resetpasswordpage.focusoutEmail());
        expect(resetpasswordpage.validateEmail()).toHaveText("The user ID or email is incorrect. Please try again. ")
        expect(resetpasswordpage.isSendEmailbtnEnabled()).toBeDisabled();
    }) 
    test("[FRONT] Resetpassword009: resetpassword success scenario",async({page, baseURL, resetpasswordpage}) => {
        await page.goto(`${baseURL}`);
        await (resetpasswordpage.btnResetPassword());
        await(resetpasswordpage.enterID(data.resetpw_userid));
        await (resetpasswordpage.enterEmail(data.resetpw_registeredemail));
        await (resetpasswordpage.clickSendEmailbtn());
    }) 
})