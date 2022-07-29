const form=document.querySelector('#searchForm');
const movies=document.querySelector('#movies');



     

      


const displayMovies= async(e)=>{

       e.preventDefault();
      const text=form.elements.query.value;
      const config={params: { q:text}};
      const res= await axios.get(`https://api.tvmaze.com/search/shows`,config);
    // const len=res.data.length;
    // console.log(res.data[0].show.name);
        

  findMovies(res.data)
       form.elements.query.value='';

     
     
    
}




form.addEventListener('submit',displayMovies)

function findMovies(moviesData){

    
    let mName;
        
    for(let i of moviesData){
        if(i.show.image){
        const imgTag=document.createElement('IMG');
    imgTag.src=i.show.image.medium;
    const divTag= document.createElement('DIV');

    
    const linkTag=document.createElement('A');     
    linkTag.href=i.show.url;
    mName=i.show.name;
    linkTag.append(mName);
    divTag.append(imgTag);
    divTag.append(linkTag);

    movies.append(divTag);
        }
        
    
    }
}
