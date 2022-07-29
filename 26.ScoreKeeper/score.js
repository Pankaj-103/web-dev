const  btn1=document.querySelector('#p1Button');
const  btn2=document.querySelector('#p2Button');
const  btn3=document.querySelector('#resetScore');
const options=document.querySelector('#options');
let  p1Display= document.querySelector('#p1Score');
let  p2Display= document.querySelector('#p2Score');
let i=0;
let j=0;
let winningScore=3;
let isGameover=false;


    btn1.addEventListener('click',function(){
    
        if(!isGameover){
            i+=1;
            if(i==winningScore){
                isGameover=true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');

            }
        p1Display.textContent=`${i}`;
        }
    })
    
    
    btn2.addEventListener('click',function(){
        if(!isGameover){
            j+=1;
        if(j==winningScore){
            isGameover=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
       p2Display.textContent=`${j}`;
    
        }
    })
     

    options.addEventListener('change',function(){

        winningScore=parseInt(this.value);
        reset();
    })
    
    
    
    
        btn3.addEventListener('click',reset)
          

          function reset(){
         
            isGameover=false;
            i=0;
            j=0;
          
    
           p1Display.textContent=`${i}`;
       
           p2Display.textContent=`${j}`;

              p1Display.classList.remove('winner','loser');
            p2Display.classList.remove('loser','winner');
    
    }

