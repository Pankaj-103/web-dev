
const express=require('express');
const app=express();
const  morgan=require('morgan');

const appError=require('./appError');

app.use(morgan('tiny'));
 const passwordCheck=(req,res,next)=>{
  const {password}=req.query;
 if(password==='nodemon'){
     next();
 }
  throw new appError('password required',404);
}



app.get('/',(req,res)=>{
    res.send('welcome to home page')
});

app.get('/cats',(req,res)=>{
    res.send('meaow meaow')
});

app.get('/error',(req,res)=>{
chicken.fly();
});

app.get('/danny',passwordCheck,(req,res)=>{
    
    res.send('he was my first dog i loved the most but died a unpredicted death :(');
    
});

app.use((err,req,res,next)=>{
    const {status=500}=err;
    res.status(status).send('Error!!!!!!!!');
})


app.listen(3000,()=>{
  console.log('host 3000 On');
})