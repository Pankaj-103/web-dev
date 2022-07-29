const express=require('express');
const app=express();

const letters=[]
const a=[  'Abloom', 
    'Abiding ',
    'Achy ',
    'Adequate ',
    'Aesthetical', 
   ' Affordable' ,
    'Ageless' ,
   ' Austere' ];
const b=[
   ' Bankrupt' ,
   ' Bedfast' ,
    'Bromidic' ,
    'Bitty' ,
    'Burly' ,
    'Busy' 
];
const c=[
    'Calm' ,
    'Charming', 
   ' Clean' ,
   ' Cogent' ,
    'Crazy' ,
    'Cute '
];
const d=[
    'Damaged' ,
   ' Dapper' ,
  '  Dutiful' ,
   ' Dramatic' ,
    'Dandified '
];
const e=[
    'Easy-going' ,
   ' Enraged' ,
   ' Equable' ,
    'Evanescent', 
    'Exemplary' ,
    'Efficacious '
];
const f=[
   ' Fabulous' ,
    'Fidgety' ,
    'Florid' ,
   ' Forgiving', 
  '  Fussy' ,
    'Frugal' 
];
const g=[
    'Gainful', 
   ' Ghostly' ,
    'Glad' ,
   ' Gabby' ,
   ' Goofy' ,
   ' Growing' 
];
const h=[
    'Hairless', 
   ' Headstrong', 
   ' Hilarious' ,
  '  Hortative' ,
   ' Hungry' ,
   ' Humane' ,
   ' Humorless '
];
const i=[
   ' Iconical', 
   ' Idle' ,
   ' Improbable', 
    'Inclined' ,
    'Introverted', 
   ' Intended' ,
   ' Impervious' 
];
const j=[
    'Jarring ',
   ' Jeering' ,
   ' Jinxed ',
    'Joyous' ,
  '  Judicious', 
    'Jovial' ,
   ' Jesting' 
];
const k=[
    'Knockout' ,
    'Kindly' ,
    'Keen' ,
   ' Keyless', 
    'Kaput' ,
   ' Kind' ,
    'Knowledgeable', 
   ' Kingly' 
];
const l=[
   ' Lanky', 
   ' Lesser', 
   ' Licit' ,
    'Loud' ,
   ' Lucky' ,
    'Lyrical' ,
   ' Laudatory', 
    'Ladylike' ,
   ' Leaden '
];
const m=[
    'Maniacal', 
    'Mean' ,
    'Milled', 
    'Moderate', 
    'Magical' ,
    'Mysterious', 
    'Musing'  
];
const n=[
   ' Native' ,
 '   Needless', 
   ' Nice' ,
   ' Noble' ,
    'Nubby' ,
   ' Nuptial', 
    'Normative', 
   ' New' ,
    'Natty' 
];
const o=[
   ' Obedient', 
   ' Obscure' ,
   ' Occidental', 
   ' Odd' ,
   ' Odorous', 
   ' Oily' ,
   ' Ominous', 
   ' Opulent '
];
const p=[
    'Palatable', 
    'Peaceful' ,
    'Phony' ,
    'Pierced', 
    'Pleasing', 
    'Poetic' ,
    'Popular' ,
    'Prankish' 
];
const q=[
    'Quack',
    'Quality', 
    'Quelled' ,
    'Quick' ,
    'Quirky' ,
    'Quondam' ,
    'Questioning', 
    'Quaint' 
];
const r=[
    'Rackety' ,
    'Realistic', 
    'Rhyming' ,
    'Rife' ,
    'Roast' ,
    'Rueful' ,
    'Rush' ,
    'Rustic' 
];
const s=[
    'Saintly' ,
    'Scared' ,
    'Secured' ,
    'Shaky' ,
    'Sickly' ,
    'Skewed' ,
    'Slow' ,
    'Smarmy'  
];
const t=[
    'Tactical' ,
    'Tailored' ,
    'Tensed' ,
    'Thoughtful', 
    'Tiresome' ,
    'Toadyish' ,
    'Tranquil' ,
    'Twiggy' 
];
const u=[
    'Ubiquitous', 
    
    'Ultra' ,
    'Unadorned', 
    'Uppish', 
    'Urban' ,
    'Usual' ,
    'Useful' 
];
const v=[
  '  Vast ',
  '  Verbal', 
 '   Virtual', 
    'Void' ,
  '  Validating', 
   ' Vexing' ,
   ' Venial ',
    'Vicarious' 
];

const num=Math.floor(Math.random()*6)+1;
const name=document.queryselector('input');
if(name[0]=='a'){
    const p=document.createElement('p');
    document.querySelectorAll('p').innerText=`${a[num]} ${name}`;
    document.


}

