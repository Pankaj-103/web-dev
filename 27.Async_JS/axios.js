// axios.get('https://api.cryptonator.com/api/full/btc-usd')
// .then(res=>{
//     console.log("processing your data...");
//     setTimeout(() => {
//     console.log(res.data.ticker.price);
        
//     }, 3000);
// })
// .catch(err=>{
//     console.log("hey some error occured");
// })



const btcprice= async()=>{
  try{
  const res= await axios.get('https://api.cryptonator.com/api/full/btc-usd');
  console.log(res.data.ticker.price);
  }
  catch(err){
      console.log("sorry some error occurred!!",err)
  }
}