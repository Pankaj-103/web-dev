const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoRel',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('mongodb connected');
})
.catch(err=>{
    console.log('Error!!',err);
})

const userSchema= new mongoose.Schema({

    first:String,
    last:String,
    address:[
    {

        street:String,
        city:String,
        state:String,
        country:String
            
        
    }
]
})

const User = mongoose.model('User',userSchema);

const makeUser= async () =>{

    const u=new User({
        first:'pankaj',
        last:'sharma',
    })
    u.address.push({
        street:'lambi gali',
        city:'Udhampur',
        state:'Jammu and Kashmir',
        country:'India'
    })

    const res=await u.save();
       console.log(res);
}

const addAddress= async (id)=>{
    const user= await User.findById(id);
    user.address.push({
        street:'peepal choraha',
        city:'Udhampur',
        state:'Jammu and kashmir',
        country:'india'
    })
    const res=await user.save();
    console.log(res);
}

addAddress("61399c55345b58ec21dc0af5");


