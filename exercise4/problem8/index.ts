class Calculator {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    add(num: number){
       return this.value += num;
    }

    subtract(num: number) {
       return this.value -= num;
       
    }

    divide(num: number) {
        if (num == 0) {
           return "Can not divide by 0!";
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
