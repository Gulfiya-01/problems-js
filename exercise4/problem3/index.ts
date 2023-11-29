// Update it as much as you want, just don't change the name
class area {
    a:number;
    Area(){
      return 0;
    };
    constructor(a:number){
    this.a=a;
 }
 }
 export class Circle extends area{
    constructor(a:number){
        super(a);
    }
    Area():number{
       return Math.PI*this.a*this.a;
    }
     
 }
 export class Rectangle extends area{
 b:number;
    constructor(a:number,b:number){
     super(a);
     this.b=b; 
    } 
    Area():number{
       return (this.a*this.b);
    }
 }
export function sumOfAllAreas(...x: area[]):number{
      let sum = 0;
      for (const shape of x) {
          sum += shape.Area();
      }
      return sum;
  } 

