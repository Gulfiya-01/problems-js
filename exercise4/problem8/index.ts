class Calculator {
    result: number;
     constructor(value: number) {
         this.result = value;
     }
 
     add(value: number):this{
         this.result += value;
         return this;
     }
 
     subtract(value: number):this{
         this.result -= value;
         return this;
     }
 
     divide(value: number):this{
         if (value === 0) {
             throw new Error("Cannot divide by zero.");
         }
         this.result /= value;
         return this;
     }
 
     multiply(value: number):this{
         this.result *= value;
         return this;
     }
 
     logResult(){
       console.log(this.result);
         return this;
     }
 
}
`const calc = new Calculator(10);

calc
    .add(10)
    .subtract(5)
    .divide(5)
    .multiply(3)
    .logResult() // logs: 9
    .add(2)`
export default Calculator;
