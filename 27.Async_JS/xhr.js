const order=new XMLHttpRequest();

order.onload= function (){
    console.log("your request is approved");
    const data=JSON.parse(this.responseText);
    console.log(data.ticker.price);
    
}

order.onerror=function (){

console.log("sorry some error occured");
console.log(this);
}

order.open('GET','https://api.cryptonator.com/api/full/btc-usd');
order.send();