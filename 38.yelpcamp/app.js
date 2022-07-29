const express=require('express');
const app=express();
const ExpressError=require('./utils/ExpressError');
const session=require('express-session');
const flash=require('connect-flash');
const path=require('path');
const methodoverride=require('method-override');
const ejsMate=require('ejs-mate');
const passport=require('passport');
const localStrategy=require('passport-local');
const User=require('./models/user');


const userRoutes= require('./routes/users');
const campgroundsRoutes=require('./routes/campgrounds');
const reviewsRoutes=require('./routes/reviews');


const mongoose=require('mongoose');
const { required } = require('joi');
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once('open',()=>{
    console.log('Database connected');
});

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodoverride('_method'));
app.use(express.static(path.join(__dirname,'public')));


const sessionConfig={
    secret:'hgfnghn',
    resave: false,
    saveUninitialized: true
    
}
app.use(session(sessionConfig))
app.use(flash());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use(passport.initialize());
app.use(passport.session());


app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success= req.flash('success');
    res.locals.error=req.flash('error');
    next();
})



app.use('/campgrounds',campgroundsRoutes);
app.use('/campgrounds/:id/reviews',reviewsRoutes);
app.use('/',userRoutes);


app.get('/',(req,res)=>{
    res.render('home')
})





app.all('*',(req,res,next)=>{
    next(new ExpressError("page not found",404));
})


app.use((err,req,res,next)=>{
const {statusCode=500}=err;
if(!err.message) err.message='oh! boy something went wrong here';

res.status(statusCode).render('errors',{err});
})


app.listen(3000,()=>{
    console.log('port 3000 is On')
})