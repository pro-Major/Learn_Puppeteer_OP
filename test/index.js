const puppeteer = require('puppeteer')
let fs=require("fs");
let path=require("path");

(async function() {
        const browser = await puppeteer.launch({
            headless: false, //run files without opening a browser
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            defaultViewport: null,
            args: ["--start-maximized",]
        })
        const page = await browser.newPage()

        await page.goto('https://www.irctc.co.in/nget/train-search')
        await page.waitForSelector('head')
        setTimeout(async()=> {
        await waitAndClick('_ngcontent-bny-c68',page)
        },5000)
        setTimeout(()=> {
            browser.close()
        },5000) 
    }
)();