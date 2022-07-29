const mongoose=require('mongoose');
let Product= require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("mongodb error!");
    console.log(err);
});

// 
const seedProduct=[
    {name:'Mango',price:30,category:'fruits'},
    {name:'apple',price:20,category:'fruits'},
    {name:'spinach',price:15,category:'vegetable'},
    {name:'carrot',price:30,category:'vegetable'},
    {name:'cheese',price:40,category:'dairy'},
    {name:'strawberry',price:60,category:'fruits'},
    {name:'milk',price:45,category:'dairy'},

];

Product.insertMany(seedProduct)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})