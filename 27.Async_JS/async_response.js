
const fetch_data= async() =>
{
try{
   
 const res= await fetch('https://api.cryptonator.com/api/full/btc-usd');
 const data= await res.json();
 console.log(data.ticker.price);

}

catch{

 console.log("sorry some trouble encountered");
}


}