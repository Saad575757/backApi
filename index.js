const express= require("express");
const cors=require('cors');
const app=express();

app.use(cors());
const port= process.env.PORT||4000;
const apiData=require('./data..json')
app.get('/',(req,res)=>{
    res.send('Hey, I am live')
})
app.get('/services',(req,res)=>{
    res.send(apiData)
})
app.listen(port,()=>{
    console.log('I am live again')
})