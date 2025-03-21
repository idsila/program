const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors({methods:['GET', 'POST']}));

app.get('/sleep', (req,res) =>{
  res.send({type: 200})
});
app.post('/sleep', (req, res) => {
  res.send({ type: 200 })
});

setTimeout(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(`https://logbin.vercel.app/about.html`, { timeout: 0 });
  await page.setViewport({ width: 120, height: 120 });
}, 10000);


app.listen('3000', err => err ? console.log(err): console.log('App started'));