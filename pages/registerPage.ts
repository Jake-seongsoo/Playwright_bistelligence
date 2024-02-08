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
    async clearID() {
        await this.page.getByPlaceholder("Please enter user ID").clear()
    }
    async focusoutID() {
        await this.page.getByPlaceholder("Please enter user ID").blur()
    }
    validateID(){
        return this.page.getByLabel('Create AccountCloseCreate').locator('#username_help')
    }
    async enterFullName(fullname: string) {
        await this.page.getByPlaceholder("Please enter full name")
                  .type(fullname);
    }
    async focusFullname() {
        await this.page.getByPlaceholder("Please enter full name").focus()
    }
    async focusoutFullname() {
        await this.page.getByPlaceholder("Please enter full name").blur()
    }
    validateFullName(){
        return this.page.getByLabel('Create AccountCloseCreate').locator('#fullName_help')
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
        return this.page.getByLabel('Create AccountCloseCreate').locator('#email_help')
    }
    async enterPassword(password: string) {
        await this.page.getByPlaceholder("Please enter password")
                  .type(password);
    }
    async focusPassword() {
        await this.page.getByPlaceholder("Please enter password").focus()
    }
    async focusoutPassword() {
        await this.page.getByPlaceholder("Please enter password").blur()
    }
    validatePassword(){
        return this.page.getByLabel('Create AccountCloseCreate').locator('#password_help')
    }
    async clearPassword() {
        await this.page.getByPlaceholder("Please enter password").clear()
    }
    async enterConfirmPassword(confirmpassword: string) {
        await this.page.getByPlaceholder("Please enter confirm password")
                  .type(confirmpassword);
    }
    async focusConfirmPassword() {
        await this.page.getByPlaceholder("Please enter confirm password").focus()
    }
    async focusoutConfirmPassword() {
        await this.page.getByPlaceholder("Please enter confirm password").blur()
    }
    validateConfirmPassword(){
        return this.page.getByLabel('Create AccountCloseCreate').locator('#confirmPassword_help')
    }
    async clearConfirmPassword() {
        await this.page.getByPlaceholder("Please enter confirm password").clear()
    }
    async clickConfirm(){
        this.page.getByRole('button', { name: 'check Create' }).click();     
    }
    isConfirmbuttonEnabled(){
        return this.page.getByRole('button', { name: 'check Create' });
    }
}