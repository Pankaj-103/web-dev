const bgColor=  (color,delay) => {

    setTimeout(() => {
        document.body.style.backgroundColor=color;
    

    }, delay);


}
// bgColor('red',1000)
// .then(()=>{
//  return bgColor('yellow',1000);
// })
// .then(()=>{
//     return bgColor('blue',1000);
// })
// .catch(()=>{
//     console.log("sorry for the error");
// })
async function bg(){
 await bgColor('red',1000);
await bgColor('orange',1000);
await bgColor('voilet',1000);
await bgColor('blue',1000);
await bgColor('yellow',1000);
await bgColor('olive',1000);
await bgColor('magenta',1000);
await bgColor('grey',1000);
await bgColor('black',1000);
await bgColor('brown',1000);
await bgColor('pink',1000);

}
