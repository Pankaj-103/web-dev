document.querySelector('button').addEventListener('click',function(){

    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);

    const h1=document.querySelector('h1');
    h1.innerText=`RGB(${x},${y},${z})`;
    
    h1.style.textAlign='center';
    document.body.style.backgroundColor=`rgb(${x},${y},${z})`
    if(x<100 && y<100 && z<200){
        h1.style.color='white';
    }
})