 const changeBgColor = (color,delay) =>{
       return new Promise((resolve,reject)=> {
         
           setTimeout(() => {
              
            document.body.style.backgroundColor=color;
            resolve();
        }, delay);
       })
}


 changeBgColor('yellow',1000)
 .then(()=>{
    return changeBgColor('red',1000);
 })
 .then(()=>{
    
     return changeBgColor('magenta',1000);
 })
 .then(()=>{
    
     return changeBgColor('brown',1000);
 })
 .then(()=>{
     return changeBgColor('olive',1000);
 })
