const express=require('express');
const app=express();
const  session=require('express-session');

app.use(session({secret:'thisisnotagoodsecret',resave:false, saveUninitialized:false}));

app.get('/pageviews',(req,res)=>{
    
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count =1;
    }
    res.send(`you have viewed this page ${req.session.count} times`);


});




app.listen(3000,()=>{
    console.log('listening on part 3000');
})       
