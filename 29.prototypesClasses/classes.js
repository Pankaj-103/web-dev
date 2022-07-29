
class Color{


    constructor(r,g,b,name) {
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;

    }
    cname(){
           return `hi i am ${this.name}`
    }
    rgb(){
    const {r,g,b}=this;
         return `rgb(${r},${g},${b})--${this.cname()}`;
    }

}

const c1=new Color(255,12,43,'white');

console.log(c1.rgb());