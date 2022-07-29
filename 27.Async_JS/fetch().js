 fetch('https://api.cryptonator.com/api/full/btc-usd')
 .then((res)=>{
          console.log("response is waiting for approval!!");
         return res.json();
          })

.then((data)=>{
    console.log("data has been parsed!!")
     console.log(data.ticker.price);
})
.catch((err)=>{
    console.log("sorry some error caught",err);
})
    
 