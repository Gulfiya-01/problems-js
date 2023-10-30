interface area {
    Area():number;
 }
 export class Circle implements area{
     r:number;
    constructor(r:number){
        this.r=r;
    }
    Area():number{
       return Math.PI*this.r*this.r;
    }
     
 }
 export class Rectangle implements area{
     a:number;
     b:number;
    constructor(a:number,b:number){
    this.a=a;
    this.b=b;
 } 
 Area():number{
       return this.a*this.b;
    }
 
 }
  export function sumOfAllAreas(...x: area[]):number{
      let sum = 0;
      for (const shape of x) {
          sum += shape.Area();
      }
      return sum;
  }   
 
// Update it as much as you want, just don't change the name


// Update it as much as you want, just don't change the name


// Update it as much as you want, just don't change the name
