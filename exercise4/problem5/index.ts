class BankAccount { 
    #balance:number;
    constructor(balance:number){
        balance=0;
        this.#balance =balance;
    }
  
    withdraw(amount:number){
        if (this.#balance >= amount) {
           return this.#balance -= amount;
        } 
        else if (this.#balance - amount < 100) {
            return -1; 
            }
            return this.#balance 
            }
    
    deposit(amount:number){
        if(amount>1000000){
            return -1
        } else{
          this.#balance+=amount;}
          
             return this.#balance     
                 
}}

export default BankAccount;
