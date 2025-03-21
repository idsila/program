const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(expess.json())
app.use(cors({methods:['GET', 'POST']}));

app.get('/', (req,res) =>{
  res.send({type: 200})
});



app.listen('3000', err => err ? console.log(err): console.log('App started'));