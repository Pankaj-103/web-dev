const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        lowercase:true,
        enum:['fruits','vegetable','dairy']
    },
    farm:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Farm'
    }
});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;