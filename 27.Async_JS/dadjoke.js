
    const jokes=document.querySelector('#jokes');
    const input=document.querySelector('button');



const dadjoke= async ()=> {
     const config={headers:{Accept:'application/json'}}
    const res= await axios.get('https://icanhazdadjoke.com/',config);
    return res.data.joke;
}


const addnewjoke= async()=>{
          const text= await dadjoke();
 
    const li=document.createElement('li');
    li.append(text);
    jokes.append(li);

}




  

input.addEventListener('click',addnewjoke);
          
    




   