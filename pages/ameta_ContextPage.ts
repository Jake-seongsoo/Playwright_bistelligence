import {Page} from "@playwright/test";
export default class ContextPage{
    constructor(public page:Page) {
    }
    
    async ShowGNB(){
        await Promise.all([
            this.page.waitForSelector("header[class *= 'gv_black_header'] span[class*='anticon-menu']",{state:"visible"}),
            this.page.waitForSelector("div[class *= 'app-tab__active'] span[class *= 'app-tab__label'] img ",{state:"visible"})

        ])
     }
     async clickMenu_getContextMenu(){
        await Promise.all([
        this.page.getByLabel('menu').click(),
        this.page.locator("css=ul[class*=ant-menu-dark] li[class*=type-ameta] div").click(),
        (await this.page.waitForSelector(" ul [id *= 'ameta-popup'] li[data-menu-id *='ameta.context'] span span")).click(),
        this.page.waitForLoadState('networkidle')
        ])
     }
    async get_frames()
    {
        return await this.page.frame({url:'http://prototype.westus.cloudapp.azure.com:30000/ameta/index.html'});
    }
    get_fist_Column:string = "css= thead tr th div span[class*='ant-table-column-title']"
    btn_Add_Context:string = 'plus Add Context'
    label_add_context:string = "div [class*='context-detail__start'] form div div[class*='management-header-module__title'] span[class*='management-header-module__title']"
}