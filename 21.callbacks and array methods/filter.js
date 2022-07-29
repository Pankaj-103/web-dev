const movies=[{ 
    name:'avatar',
    rating:98,
    year:2010
},{ 
    name:'amadeus',
    rating:90,
    year:1986
},{ 
    name:'Inception',
    rating:89,
    year:2008
},{ 
    name:'Interstellar',
    rating:85,
    year:2015
},{ 
    name:'Wolf of wall street',
    rating:81,
    year:2012
},{ 
    name:'The socaial network',
    rating:79,
    year:2009
}];

const bestMovies= movies.filter((x)=> x.rating>85).map((y)=>y.name);
const averageMovies= movies.filter((x)=> x.rating<=85).map((y)=>y.name);
const latestMovies= movies.filter((x)=> x.year>2010).map((y)=>y.name);
const oldMovies=movies.map((y)=>{
    if(y.year<2010){
        return y.name;
    }
});


console.log(bestMovies);
console.log(averageMovies);
console.log(latestMovies);
console.log(oldMovies);