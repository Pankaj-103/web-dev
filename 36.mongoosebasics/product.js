const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("hurrah connected");
})
.catch((err)=>{
    console.log("sorry not connected");
    console.log(err);
});

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    onSale:{
        type:Boolean,
        default:false
    }
});

const Product= mongoose.model('Product',productSchema);

const bike= new Product({name:'mountain bike XHR',price:455})
bike.save()
.then(data=>{
    console.log("it worked");
    console.log(data);
})
.catch(err=>{
    console.log("Oh god some error");
    console.log(err);
})
