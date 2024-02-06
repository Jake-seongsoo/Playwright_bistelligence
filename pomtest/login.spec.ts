import {test} from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage";


const newUser = "Paul";
const password = "&ianyang2010";

test("login",async({page, baseURL},testoptions) => {
    testoptions.slow();
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}`);

    await register.createuserBtn();
    await register.enterID(newUser);
    await register.enterFullName("김성수");
    await register.enterEmail("shark1011@naver.com");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    await register.clickConfirm();
})