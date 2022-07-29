let arr=[{ name:"pankaj", networth:1000000000},{name:"lucky",networth:10000},{name:"akash",networth:200000}];

const sum= arr.reduce((hsal,lsal)=>{
    if(lsal.networth>hsal.networth){
        return lsal;
    }
    return hsal;
 })
 console.log(sum);

