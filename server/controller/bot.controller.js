const puppeter = require('puppeteer')

const visitPage = async (req,res)=>{
    if(req?.body?.url){
        const url = req.body.url;
        if(url.startsWith('http://') || url.startsWith('https://')){
            const browser = await puppeter.launch({
                headless: false
            });
        
            const page = await browser.newPage({
                headless: "new"
            })
            await page.goto('http://localhost:5173/',{ waitUntil: 'load', timeout: 0 })
            await page.setCookie({name:'flag', value:'softwarica{fake_flag}'})    
            await page.goto(req.body.url,{ waitUntil: 'load', timeout: 0 });
            await browser.close()
            res.send('ADMIN VISITED YOUR PAGE!!')
        }else{
            res.send('Invalid URL')
            return
        }

   }else{
        await browser.close()
        res.send('Something went wrong')
   }
}

module.exports = visitPage