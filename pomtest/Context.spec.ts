import { exec } from "child_process";
import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"

test.describe("ameta Context function Test", async() => {
    test("[FRONT] Context001: Contexttable is available",async({baseURL, contextpage}) => {
        contextpage.page.goto(`${baseURL}`);
        await (contextpage.ShowGNB());
        await (contextpage.clickMenu_getContextMenu());
        //expect(contextpage.displayed_table()).toHaveText("Context Name");
    })
}) 
