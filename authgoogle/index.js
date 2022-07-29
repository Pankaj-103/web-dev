
const express=require('express');
const app=express();
const session=require('express-session');
require('./auth');
const passport=require('passport');

function isLoggedIn(req,res,next){
  req.user ? next : res.sendStatus(401);
}

app.use(session({
    secret:'fdgf',
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Authenticate with google</a>');
})

app.get('/topsecret',isLoggedIn,(req,res)=>{
    res.send('girls are crazy about me in bmsce');
})

app.get('/auth/google',
passport.authenticate('google',{scope:['email','profile']})
)

app.get('/google/callback',
 passport.authenticate('google',{
     successRedirect:'/topsecret',
     failureRedirect:'/auth/failure',
 })
);

app.get('/auth/failure',(req,res)=>{
    res.send('something went wrong..');
})

app.get('/logout',(req,res)=>{
    req.logout();
    req.session.destroy();
    res.send('goodbye');s
})

app.listen(3000,()=>{
    console.log('port 3000 is On');
})