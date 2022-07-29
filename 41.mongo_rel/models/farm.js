const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/farm_pro',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('mongodb connected');
})
.catch(err=>{
    console.log('Error!!',err);
})


const productSchema=new mongoose.Schema({

    name:String,
    price:Number,
    season:{
        type:String,
        enum:['spring','summer','fall','winter']
        }
})
const  farmSchema= new mongoose.Schema({
    name:String,
    city:String,
    products:[{type:mongoose.Schema.Types.ObjectId,ref :'Product'}]
})

const Product= mongoose.model('Product',productSchema);
const Farm=mongoose.model('Farm',farmSchema);

// Product.insertMany([
//     {name:'pumpkin',price:34.44,season:'spring'},
//     {name:'gourd',price:20.12,season:'summer'},
//     {name:'potato',price:25.45,season:'winter'}

// ])

// const makeFarm= async()=>{
//     const farm= new Farm({
//         name:'Beri sunetar farm',city:'Ramnagar,Udhampur'
//     })
//     const potato= await Product.findOne({name:'potato'});
//     farm.products.push(potato);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct =async ()=>{
    const farm=await Farm.findOne({name:'Beri sunetar farm'});
    const pumpkin=await Product.findOne({name:'pumpkin'});
    farm.products.push(pumpkin);
    await farm.save();
    console.log(farm);
}

Farm.findOne({name:'Beri sunetar farm'})
.populate('products')
.then(farm => console.log(farm));
