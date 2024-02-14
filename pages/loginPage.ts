import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page:Page) {}

    async enterusername (username:string) {
        await this.page.locator("#username")
              .type(username);
        
    }
    async enterpassword (password:string){
        await this.page.locator("#password")
              .type(password);
    }
    validateID(){
        return this.page.locator('css=div[id="username_help"] div')
    }
    validatePassword(){
        return this.page.locator('css=div[id="password_help"] div')
    }
    async focusLoginID(){
        await this.page.getByPlaceholder('Enter User ID').focus();
    }
    async focusoutLoginID(){
        await this.page.getByPlaceholder('Enter User ID').blur();
    }
    async focusLoginPassword(){
        await this.page.getByPlaceholder("Enter Password").focus();
    }
    async focusoutLoginPassword(){
        await this.page.getByPlaceholder("Enter Password").blur();
    }
    welcomeInputPopup(){
        return this.page.locator('css=body div div[class="gv-massage-body"] div div:nth-child(1)')// 이름이 gv-description인 span 태그 class안의 div 태그 안의 div 태그 찾기 
    }
    async clickbtnlogin(){
        await this.page.locator('css=div[class *= login_btn] button').click(); // class 이름이 login_btn 이라는 단어가 포함된 div 태그 안의 button 태그 찾기.
    }
    async clickbtnlogin_confirm(){
        await this.page.locator('css=div button[class$="ant-btn css-gzal6t ant-btn-primary"]').click();
    }
    ShowGNB(){
       return this.page.locator("css=  div[class *= 'app-tab__active'] span[class *= 'app-tab__label'] img ")
    }
    showCopyright(){
        return this.page.locator("css= div[class *= 'copyright']")
    }

}