const puppeteer = require('puppeteer')
let fs=require("fs");
let path=require("path");
try{
    (async function() {
        const browser = await puppeteer.launch({
            headless: false, //run files without opening a browser
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            defaultViewport: null,
            args: ['--start-maximized',]
        })
        const page = await browser.newPage()    
        await page.setDefaultTimeout(100000);
        await page.goto('https://www.youtube.com/')
        
        await page.type('#search','puppeteer',{delay : 10})
        await page.click('#search-icon-legacy')
        await page.waitFor(5000)
        await page.goBack()
        // await browser.close()
    }
)();
}catch(err){
    console>log("error Occured ")
}
