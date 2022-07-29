
let input=prompt("enter something");
let Quit="quit";
let arr=[];
while(input!=Quit){
   
 
    if(input=="new"){
        let task=prompt("enter a ToDo")
        arr.push(task);
        input=prompt("enter something");
    }
    else if(input=="list"){
        
        console.log(arr);
        input=prompt("enter something");
    }
    else if(input=="delete"){
      let task=parseInt(prompt("enter the list to be deleted"));
        arr.splice(parseInt(task),1);
        input=prompt("enter something");
    }
   else{
       input=prompt("invalid! enter again")
       
   }
}
console.log("you quit this MVP");