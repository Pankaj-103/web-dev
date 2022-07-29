const fs= require('fs');
//console.log(fs);
const folderName=process.argv[2] || "project";
try{
fs.mkdirSync(folderName);

fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)
}
catch(e){
    console.log('sorry some error occured!!!!');
    console.log(e);
}
