const express=require('express');
const app=express();
const path=require('path');
const methodoverride=require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodoverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

let tweets=[
  {
    id:uuid(),
    name:'pankaj',
    comment:'i am the wealthiest man of india'

  },
  {
    id:uuid(),
    name:'Ashish',
    comment:'i am going to take commerce in plus two'

  },
  {
    id:uuid(),
    name:'Nitika',
    comment:'i want to became a doctor'
  },
  {
    id:uuid(),
    name:'Sheetal',
    comment:'i have qualified for Bsc nursing'

  }
]

app.get('/tweets',(req,res)=>{
 res.render('tweets/index',{tweets});
})

app.get('/tweets/new',(req,res)=>{
  res.render('tweets/new');

    });

app.get('/tacos',(req,res)=>{
  res.send('Get /tacos response');
})

app.post('/tweets',(req,res)=>{
  const {name,comment}=req.body;
  tweets.push({name,comment,id:uuid()});
  res.redirect('/tweets');
})

app.get('/tweets/:id',(req,res)=>{
  const {id}=req.params;
  const comment=tweets.find( t=> t.id=== id);
   res.render('tweets/show',{comment});
})

app.patch('/tweets/:id',(req,res)=>{
  const {id} = req.params;
  const newComment=req.body.comment;
  const foundComment=tweets.find(t=> t.id===id);
  foundComment.comment=newComment;
  res.redirect('/tweets');
});

app.get('/tweets/:id/edit',(req,res)=>{
  const {id}=req.params;
  const comment=tweets.find(t=> t.id===id);
  res.render('tweets/edit',{comment});
})

app.delete('/tweets/:id',(req,res)=>{
   const {id}= req.params;
     tweets=tweets.filter(t=>t.id!==id);
   res.redirect('/tweets');
})
app.post('/tacos',(req,res)=>{
  console.log(req.body);
    res.send('post /tacos response');
})


app.listen(3000,()=>{
    console.log("ON port 3000");
})