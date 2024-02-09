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
    validateID(){
        return this.page.getByText('Username is required').locator('#username_help')
    }
    validatePassword(){
        return this.page.getByText('Password is required').locator('#password_help')
    }
    async focusLoginID(){
        await this.page.getByPlaceholder('Enter User ID').focus();
    }
    async focusoutLoginID(){
        await this.page.getByPlaceholder('Enter Password').blur();
    }
}