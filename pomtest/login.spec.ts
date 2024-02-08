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
        await registerpage.focusoutID();
        expect(registerpage.isConfirmbuttonEnabled()).toBeEnabled();
        await registerpage.clickConfirm();
    }) 
    test("register_ID_validationError",async({page, baseURL, registerpage}) => {
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
        
        expect(registerpage.validateEmail()).toBeVisible();
        expect(registerpage.validateEmail()).toHaveText("Email is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterEmail(data.wrongemail);
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();

        expect(registerpage.validateEmail()).toBeVisible();
        expect(registerpage.validateEmail()).toHaveText("Incorrect email format"); //mvc010
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })
    test("register_password_validationError",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterPassword(data.wrongpassword_min);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is 8 ~ 20 letters"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();

        await registerpage.enterPassword(data.wrongpassword_over);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is 8 ~ 20 letters"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();

        await registerpage.enterPassword(data.wrongpassword_x_special);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is a combination of alphabet, numbers and special character"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();
        
        await registerpage.enterPassword(data.wrongpassword_checkKor);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect.soft(registerpage.validatePassword()).toHaveText("Password is a combination of alphabet, numbers and special character"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("register_confirm_password_validationError",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.createuserBtn();
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterConfirmPassword(data.wrongpassword_min);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect.soft(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is 8 ~ 20 letters"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();

        await registerpage.enterConfirmPassword(data.wrongpassword_over);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is 8 ~ 20 letters"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();

        await registerpage.enterConfirmPassword(data.wrongpassword_x_special);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("ConfirmPassword is a combination of alphabet, numbers and special character"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();
        
        await registerpage.enterConfirmPassword(data.wrongpassword_checkKor);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("ConfirmPassword is a combination of alphabet, numbers and special character"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterPassword(data.password);
        await registerpage.enterConfirmPassword(data.wrongpassword_checkKor);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("password do not match"); //mcv011
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
})