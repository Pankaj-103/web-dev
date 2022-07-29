let no=prompt("how many array elements");
let arr=[];
for(let i=1;i<=no;i++){
let input=prompt(`enter the ${i} element`);
     arr.push(input);
}

function lastElement(arr){
    if(arr!==null){
        return arr[arr.length-1];
        
    }
    else{
        return null;
    }
    
    
}

console.log(lastElement(arr));

