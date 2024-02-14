import {test as baseTest} from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage";
import ResetpasswordPage from "../pages/resetpasswordPage";

type pages= {
    registerpage: RegisterPage;
    loginpage: LoginPage;
    resetpasswordpage: ResetpasswordPage;
}
const welcomepages= baseTest.extend<pages>({

     registerpage: async({page},use) => {      //Use는 overide 개념 Fixture를 도입함으로써 모든 Test마다, 새로운 Page object를 선언할 필요가 없게 됨
        await use(new RegisterPage(page));
     },
     loginpage: async({page},use) => {      //Use는 overide 개념
        await use(new LoginPage(page));
     },
     resetpasswordpage: async({page},use) => {      //Use는 overide 개념
      await use(new ResetpasswordPage(page));
     }
})

export const test = welcomepages;
export const expect = welcomepages.expect;