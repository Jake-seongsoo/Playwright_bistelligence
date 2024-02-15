import {Page} from "@playwright/test";
export default class ContextPage{
    constructor(public page:Page) {
        this.page =page;
        this.ShowGNB();
    }
    ShowGNB(){
        return this.page.locator("css=  div[class *= 'app-tab__active'] span[class *= 'app-tab__label'] img ")
     }
    GetContextmenu() {
        return this.page.locator(" ul [id *= 'ameta-popup'] li[data-menu-id *='ameta.context'] span span")
    }
}