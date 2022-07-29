const express=require("express");
const app=express();

// app.use((req,res)=>{
//     console.log("we got a new request");
//     res.send("<h1>this is my web page</h1>")
// })
app.get('/',(req,res)=>{
    res.send("home page");
});
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}= req.params;
    res.send(`you requested for ${subreddit} with postID ${postId} on subreddit`);
})
app.get('/cats',(req,res)=>{
    res.send("<h1>Meow Meow!!!!!</h1>");
});
app.get('/dogs',(req,res)=>{
    res.send("<h1>Bow Bow!!!!</h1>");
});
app.post('/',(req,res)=>{
    res.send("this is a new post request");
});

app.get('/search',(req,res)=>{
 const {q}= req.query;
    res.send(`result for ${q}`);
})

app.get('*',(req,res)=>{
    res.send("<h1>Wrong Path!!</h>");
})


app.listen(3000,()=>{
    console.log("request sent on port 3000");
});

