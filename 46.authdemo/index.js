const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./models/user');
const bcrypt=require('bcrypt');
const session= require('express-session');

mongoose.connect('mongodb://localhost:27017/authdemo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("mongodb error!");
    console.log(err);
});


app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));
app.use(session({secret:'fghnb',
resave:true,
    saveUninitialized:false         
}));

const requireLogin=(req,res,next)=>{
   if(!req.session.user_id){
     return res.redirect('/login');
   }
   next();

}


app.get('/',(req,res)=>{
    res.send('This is homepage');
  })


app.get('/register',(req,res)=>{
  res.render('register');
})

app.post('/register', async (req,res)=>{
   const {password,username}= req.body;
   const user= new User({username,password});
   await user.save();
   req.session.user_id=user._id;

   res.redirect('/');
})


app.post('/logout',(req,res)=>{
  //req.session.user_id=null;
  req.session.destroy();
  res.redirect('login');
})


app.get('/login',  (req,res)=>{
   res.render('login');
})

app.post('/login', async (req,res)=>{
    const {username,password}= req.body;
     const foundUser=await User.findAndValidate(username,password);
    if(foundUser){
        req.session.user_id=foundUser._id;
        
        res.send('yeah welcome')
    }
    else{
        res.send('try again wrong credentials');
    }

    })


app.get('/secret', requireLogin,(req,res)=>{
  
   
    res.render('secret');

})

app.get('/topsecret', requireLogin,(req,res)=>{
       res.send('hurrrah you are logged in');
})

app.listen(3000,(req,res)=>{

    console.log('serving on port 3000');

})