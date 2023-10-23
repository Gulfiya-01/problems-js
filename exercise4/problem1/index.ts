class Person {  
    name: string;
    age: number;
 
    constructor(name: string, age:number) {
         this.name = name;
         this.age = age;
     }
       compareAge(other: Person):string{
       if(this.age>other.age){
          return `${other.name} is younger than me.`;
       }
        if(this.age<other.age){
          return `${other.name} is older than me.`;
       }
      else{
          return `${other.name} is the same age as me.`;
       }
    }}

export default Person;
