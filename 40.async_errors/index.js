const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');

const appError=require('./appError');


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const mongoose=require('mongoose');
const Product= require('./models/product');
const { urlencoded } = require('express');
mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("mongodb error!");
    console.log(err);
});


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const categories=['fruits','vegetable','dairy','meat']

function wrapAsync(fn){
    return function(req,res,next){
   fn(req,res,next).catch(e => next(e));

    }
} 


app.get('/products', wrapAsync(async (req,res)=>{
    const {category}= req.query;
    if(category){
        const products=await Product.find({category});
        res.render('products/index',{products,category})
    }
    else{
        const products= await Product.find({});
    
        res.render('products/index',{products,category:'All'})
    }
   
}))

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories});
    
    
})
app.get('/products/:id', wrapAsync(async (req,res,next)=>{
    const {id}= req.params;
    const product= await Product.findById(id);
    if(!product){
      return  next(new appError("product not found",404));
    }
    res.render('products/show',{product});
}))

app.get('/products/:id/edit',wrapAsync(async (req,res)=>{
    
    const {id}=req.params;
    const product= await Product.findById(id);
    res.render('products/edit',{product,categories});
}))


app.delete('/products/:id',wrapAsync( async (req,res)=>{
    const {id}= req.params;
    const product=await Product.findByIdAndDelete(id);
    res.redirect('/products')
}))

app.post('/products', wrapAsync(async (req,res,next)=>{
   const newProduct=new Product(req.body)
    await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
 

}))

app.put('/products/:id', wrapAsync(async (req,res,next)=>{
     const {id}=req.params;
   const product =await  Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
   res.redirect(`/products/${product._id}`);
   // console.log(req.body);
    // res.send('put!!!!');

}))

app.use((err,req,res,next)=>{
    const {status=500,message='something went wrong'}= err;
    res.status(status).send(message);
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
});
