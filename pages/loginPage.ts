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
    async clickLoginBtn(){
        await this.page.click("ant-form-item-control-input-content")
    }
}