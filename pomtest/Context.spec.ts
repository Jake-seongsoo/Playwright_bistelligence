import { exec } from "child_process";
import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/login.json"
import ContextPage from "../pages/ameta_ContextPage";

test.describe("ameta Context function Test", async() => {
    test("[FRONT] Context001: Contexttable is available",async({baseURL, contextpage}) => {
        contextpage.page.goto(`${baseURL}`);
        await (contextpage.ShowGNB());
        await (contextpage.clickMenu_getContextMenu());
       const frame= await contextpage.get_frames();
       if(frame !=null) 
       {
         contextpage.get_fist_Column(frame);
       }
        else throw new Error("No such frames")
    })
    test("[FRONT] Context002: Click Add Context",async({baseURL, contextpage}) => {
        contextpage.page.goto(`${baseURL}`);
        await (contextpage.ShowGNB());
        await (contextpage.clickMenu_getContextMenu());
       const frame= await contextpage.get_frames();
       if(frame !=null) 
       {
        
       }
        else throw new Error("No such frames")
    })
}) 
