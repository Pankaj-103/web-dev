
function callme(func){
    func();
    
}

function hello(){

  let num=  Math.floor(Math.random()*6 )+1;
    console.log(num);
}

for(let i=0;i<6;i++){
    callme(hello);
}