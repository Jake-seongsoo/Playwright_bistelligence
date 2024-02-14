import {Page} from "@playwright/test";
export default class ResetpasswordPage{

    constructor(public page: Page) {}

    async btnResetPassword() {
        await this.page.getByText("Forget Your Password?").click();
    }
    Infotext(){
        return this.page.locator("css= div[class *= 'module__description']")
    }
    async enterID(id: string) {
        await this.page.getByPlaceholder("Please enter user ID")
                   .type(id);
    }
    async clearID() {
        await this.page.getByPlaceholder("Please enter user ID").clear()
    }
    async focusID(){
        await this.page.getByPlaceholder("Please enter user ID").focus()
    }
    async focusoutID() {
        await this.page.getByPlaceholder("Please enter user ID").blur()
    }
    validateID(){
        return this.page.getByLabel('Reset Password').locator('#username_help')
    }
    async enterEmail(email: string) {
        await this.page.getByPlaceholder("Please enter email")
                  .type(email);
    }
    async focusEmail() {
        await this.page.getByPlaceholder("Please enter email").focus()
    }
    async focusoutEmail() {
        await this.page.getByPlaceholder("Please enter email").blur()
    }
    validateEmail(){
        return this.page.getByLabel('Reset Password').locator('#email_help')
    }
    async clickSendEmailbtn(){
        this.page.getByRole('button', { name: 'check Send Email' }).click();     
    }
    isSendEmailbtnEnabled(){
        return this.page.getByRole('button', { name: 'check Send Email' });
    }
}