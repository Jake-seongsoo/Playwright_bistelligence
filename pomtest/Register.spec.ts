import { register } from "module";
import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("podo Register function Test", async() => {
    test("[FRONT] Register001: Create user user_ID is missing",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.focusID();
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[FRONT] Register002: Create user user_ID have korean",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser(); 
        await registerpage.enterID(data.wrongid_kor);
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is a combination of alphabet and numbers"); //mcv012
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearID();
    })
    test("[FRONT] Register003: Create user user_ID have korean,special characters",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser(); 
        await registerpage.enterID(data.wrongid_mix);
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("User ID is a combination of alphabet and numbers"); //mcv012
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearID();
    })
    test("[FRONT] Register004: Create user user ID is duplicated",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser(); 
        await registerpage.enterID(data.wrongid_duplicate);
        await registerpage.focusoutID();
        expect(registerpage.validateID()).toBeVisible();
        expect(registerpage.validateID()).toHaveText("This User ID is already in used."); //mv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })

    test("[FRONT] Register005: Create user full name is missing",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.focusFullname();
        await registerpage.focusoutFullname();

        expect(registerpage.validateFullName()).toBeVisible();
        expect(registerpage.validateFullName()).toHaveText("Full Name is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })
    test("[FRONT] Register006: Create user email is missing",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();
        
        expect(registerpage.validateEmail()).toBeVisible();
        expect(registerpage.validateEmail()).toHaveText("Email is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

        await registerpage.enterEmail(data.wrongemail);
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();
    })
    test("[FRONT] Register007: Create user email is invaild format",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterEmail(data.wrongemail);
        await registerpage.focusEmail();
        await registerpage.focusoutEmail();

        expect(registerpage.validateEmail()).toBeVisible();
        expect(registerpage.validateEmail()).toHaveText("Incorrect email format"); //mvc010
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();

    })
    test("[FRONT] Register008: Create user password is missing",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();

        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[FRONT] Register009: Create user password is less than spec",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterPassword(data.wrongpassword_min);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is 8 ~ 20 letters"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();
    })
    test("[FRONT] Register010: Create user password is over than spec",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterPassword(data.wrongpassword_over);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is 8 ~ 20 letters"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();

    })
    test("[FRONT] Register011: Create user password don't have special characters",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterPassword(data.wrongpassword_x_special);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is a combination of alphabet, numbers and special character"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearPassword();
    })
    test("[FRONT] Register012: Create user password include korean",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterPassword(data.wrongpassword_checkKor);
        await registerpage.focusPassword();
        await registerpage.focusoutPassword();
        expect(registerpage.validatePassword()).toBeVisible();
        expect(registerpage.validatePassword()).toHaveText("Password is a combination of alphabet, numbers and special character"); //mcv013
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[Front] Register013: Create user_confirm_password is missing",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is required."); //mv001
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[Front] Register014: Create user_confirm_password is less than spec",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterConfirmPassword(data.wrongpassword_min);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();

        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is 8 ~ 20 letters"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();
    })
    test("[Front] Register015: Create user_confirm_password is longer than spec",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterConfirmPassword(data.wrongpassword_over);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Confirm Password is 8 ~ 20 letters"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();
    })
    test("[Front] Register016: Create user_confirm_password don't have special characters",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterConfirmPassword(data.wrongpassword_x_special);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("ConfirmPassword is a combination of alphabet, numbers and special character"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
        await registerpage.clearConfirmPassword();
    })
    test("[Front] Register017: Create user_confirm_password include korean",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterConfirmPassword(data.wrongpassword_checkKor);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("ConfirmPassword is a combination of alphabet, numbers and special character"); //mcv015
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[Front] Register018: Create user_confirm_password is not match with password",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterPassword(data.password);
        await registerpage.enterConfirmPassword(data.wrongpassword_checkKor);
        await registerpage.focusConfirmPassword();
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.validateConfirmPassword()).toBeVisible();
        expect(registerpage.validateConfirmPassword()).toHaveText("Password do not match"); //mcv011
        expect(registerpage.isConfirmbuttonEnabled()).toBeDisabled();
    })
    test("[FRONT] Register019: successful create user",async({page, baseURL, registerpage}) => {
        await page.goto(`${baseURL}`);
        await registerpage.btncreateuser();
        await registerpage.enterID(data.id);
        await registerpage.enterFullName(data.firstname);
        await registerpage.enterEmail(data.email);
        await registerpage.enterPassword(data.password);
        await registerpage.enterConfirmPassword(data.password);
        await registerpage.focusoutConfirmPassword();
        expect(registerpage.isConfirmbuttonEnabled()).toBeEnabled();
        await registerpage.clickConfirmbtn();
    }) 
})