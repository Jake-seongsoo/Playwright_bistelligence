import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("ameta Context function Test", async() => {
    test("[FRONT] Context001: Contexttable is available",async({page,baseURL, contextpage}) => {
        (page.goto(`${baseURL}`));
        expect(contextpage.ShowGNB()).toBeVisible();
        expect(contextpage.GetContextmenu()).toHaveText("Context");
        await contextpage.GetContextmenu().click();
    })
}) 
