const bcrypt=require('bcrypt');

const hashpassword= async (pw)=>{

    const hash= await bcrypt.hash(pw,12);
    
    console.log(hash);
}

hashpassword('pankaj');

const login= async (pw,hashedPw) =>{
    const result= await bcrypt.compare(pw,hashedPw);
    if(result){
        console.log('Logged In successfully');
    }
    else{
        console.log('Incorrect password');
    }
}

//login('pankaj!','');