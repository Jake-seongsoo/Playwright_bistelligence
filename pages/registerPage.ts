import {Page} from "@playwright/test";
export default class RegisterPage{

    constructor(public page: Page) {}
    async createuserBtn() {
        await this.page.getByText("Create Account").click();
    }
    async enterID(id: string) {
        await this.page.getByPlaceholder("Please enter user ID")
                   .type(id);
    }
    async enterFullName(fullname: string) {
        await this.page.getByPlaceholder("Please enter full name")
                  .type(fullname);
    }
    async enterEmail(email: string) {
        await this.page.getByPlaceholder("Please enter email")
                  .type(email);
    }
    async enterPassword(password: string) {
        await this.page.getByPlaceholder("Please enter password")
                  .type(password);
    }
    async enterConfirmPassword(confirmpassword: string) {
        await this.page.getByPlaceholder("Please enter confirm password")
                  .type(confirmpassword);
    }
    async clickConfirm(){
        this.page.getByRole('button', { name: 'check Create' }).click()     
    }
}