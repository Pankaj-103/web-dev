const tweetForm=document.querySelector('#tweetForm');
tweetForm.addEventListener('submit',function(e){
    
    e.preventDefault();
    const username=tweetForm.elements.username;
   const tweet= tweetForm.elements.tweet;
   const postedTweets=document.querySelector("#postedTweets");
   
   if(username.value=='' && tweet.value=='' ){
       alert("please enter something");
   }
   else{
  tweets(username.value,tweet.value);
   }
  username.value='';
  tweet.value='';


  


})

function tweets(usernameInput,tweetInput){
    const newTweet=document.createElement('li');
    const btag=document.createElement('b');
     btag.append(usernameInput);
 
     newTweet.append(btag);
     newTweet.append(`--${tweetInput}`);
     postedTweets.append(newTweet);

}


postedTweets.addEventListener('click',function(x){
        x.target.remove();
})