const puppeteer = require('puppeteer')
let fs=require("fs");
let path=require("path");
const { waitForDebugger } = require('inspector');
const { count } = require('console');
 

try{
    (async function() {
        const browser = await puppeteer.launch({
            headless: false, //run files without opening a browser
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            defaultViewport: null,
            args: ['--start-maximized',],
        })
        const page = await browser.newPage()   
        await page.setDefaultTimeout(100000);
        await page.goto('https://www.irctc.co.in/nget/train-search')

        const butonclickOP = await page.click("button.btn.btn-primary")
        // await page.type("input[aria-controls='pr_id_1_list']",'LTT')
        // await page.keyboard.press('Enter')

        await page.waitFor(1000)
        await page.type("input[aria-controls='pr_id_1_list']","LTT")
        await page.waitFor(100)
        await page.keyboard.press("Enter",{clickCount: 1})
        await page.keyboard.press("tab",{clickCount: 2})
        await page.waitFor(100000)
        await browser.close()
    }
)();
}catch(err){
    console>log("error Occured ")
}
