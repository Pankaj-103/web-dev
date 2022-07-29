const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/tweet',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('mongodb connected');
})
.catch(err=>{
    console.log('Error!!',err);
})

const userSchema= new mongoose.Schema({
    username:String,
    age:Number
})

const tweetSchema= new mongoose.Schema({
    text:String,
    likes:Number,
    user:{ type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

const User= mongoose.model('User',userSchema);
const Tweet= mongoose.model('Tweet',tweetSchema);

const makeTweets=async ()=>{

    const user= new User({username:'pablo45',age:45});
    const tweet1=new Tweet({text:'hey gaidddg g',likes:0});
    tweet1.user=user;
    user.save();

    tweet1.save();
    console.log(tweet1);
};

makeTweets();