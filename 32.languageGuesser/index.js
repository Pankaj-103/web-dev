const franc=require('franc');
const langs=require('langs');
const input=process.argv[2];
const langcode=franc(input);
if(langcode === 'und'){
    console.log("sorry couldnt find that shit");

}
else{
const language=langs.where("3",langcode);
console.log(language.name);
}