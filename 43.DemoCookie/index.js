const express=require('express');
const app= express();

const cookieParser = require('cookie-parser');

app.use(cookieParser('gjhgmhmgh'));


app.get('/greet',(req,res)=>{
   const {name,geoip}=req.cookies;
       res.send(`hey there ${name} you are from ${geoip}`);

});

app.get('/setname',(req,res)=>{
    res.cookie('name','shubbu mannu');
    res.cookie('geoip','Udhampur');
    res.send('ok cookie has been sent to you');
})

app.get('/signedcookie',(req,res)=>{
    res.cookie('fruit','gauva',{signed:true});
    res.send('your cookie has  been signed');
})



app.listen(3000,()=>{
    console.log('server On');
})