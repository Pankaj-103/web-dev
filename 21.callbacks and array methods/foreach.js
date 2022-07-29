let num=[1,2,3,4,5,6,7,8,9,10];

num.forEach(function(x){
    if(x%2!==0){
        console.log(x);
    }
})

const movies=[{

    movie:"amadeus",
    score:80
},{
    movie: "lost soul",
    score:100
},{
    movie:"hell charge",
    score:95
}];

movies.forEach(function(x){

console.log(x.movie+x.score)
})
