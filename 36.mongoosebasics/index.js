const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("hurrah connected");
})
.catch((err)=>{
    console.log("sorry not connected");
    console.log(err);
});

const moviesSchema= new mongoose.Schema({
    title: String,
    year:Number,
    score:Number,
    rating:String
});

const Movie= mongoose.model('Movie',moviesSchema);
//const amadeus=new Movie({title:'amadeus',year:1986,score:9.3,rating:'R'});

Movie.insertMany([ {title:'amadeus',year:1986,score:9.3,rating:'A'},
{title:'inception',year:2010,score:8.9,rating:'A'},
{title:'Interstellar',year:2014,score:9.6,rating:'AA'},
{title:'parasite',year:2018,score:9.5,rating:'AAA'},
{title:'Shindler list',year:1994,score:9.8,rating:'AAA'},
{title:'shawshank redemption',year:1998,score:9.7,rating:'AA'},
]);



