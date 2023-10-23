class Calculator {
    value: number;

    constructor(initialValue: number) {
        this.value = initialValue;
    }

    add(num: number){
       return this.value += num;
        
    }

    subtract(num: number) {
       return this.value -= num;
       
    }

    divide(num: number) {
        if (num === 0) {
            console.error("Cannot divide by zero.");
            return this;
        }
       return this.value /= num;
      
    }

    multiply(num: number){
        return this.value *= num;
         
    }

    logResult():number{
        
        return this.value;
    }
}

export default Calculator;
