const btns=document.querySelectorAll('button');
const h1s=document.querySelectorAll('h1');
function randomColor(){
const r=Math.floor(Math.random()*256);
const g=Math.floor(Math.random()*256);
const b=Math.floor(Math.random()*256);

return `rgb(${r},${g},${b})`;
}
for(let btn of btns){

    btn.addEventListener('click',changeColor);
}

for(let h1 of h1s){

    h1.addEventListener('click',changeColor);
}

function changeColor(){
    
    this.style.backgroundColor=randomColor();
    this.style.color=randomColor();


}