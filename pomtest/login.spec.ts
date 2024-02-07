import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Login function Test", async() => {
    test("login",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.enterID(data.id);
        await registerpage.enterFullName(data.firstname);
        await registerpage.enterEmail(data.email);
        await registerpage.enterPassword(data.password);
        await registerpage.enterConfirmPassword(data.password);
        expect(registerpage.isConfirmbuttonEnabled()).toBeEnabled();
        await registerpage.clickConfirm();
    })
    test.only("register_ID_validationError",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterID(data.wrongid_kor);
        await registerpage.focusEmail();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is a combination of alphabet and numbers"); //mcv012
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearID();

        await registerpage.enterID(data.wrongid_mix);
        await registerpage.focusEmail();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is a combination of alphabet and numbers"); //mcv012
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearID();

        await registerpage.enterID(data.wrongid_duplicate);
        await registerpage.focusEmail();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("This User ID is already in used."); //mv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })

    test("register_full_name_validationError",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.focusFullname();
        await registerpage.focusoutFullname();

        expect(registerpage.validateFullName()).toBeVisible();
        expect(registerpage.validateFullName()).toHaveText("Full Name is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })
    test("register_email_validationError",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();
        
        expect(registerpage.validateemail()).toBeVisible();
        expect(registerpage.validateemail()).toHaveText("Email is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterEmail(data.wrongemail);
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();

        expect(registerpage.validateemail()).toBeVisible();
        expect(registerpage.validateemail()).toHaveText("Incorrect email format"); //mvc010
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })
})