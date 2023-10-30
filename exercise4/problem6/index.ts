// Update it as much as you want, just don't change the names 
export class BankAccount { 
  balance:number;
  constructor(balance:number){
      balance=0;
      this.balance =balance;
  }

  withdraw(amount:number){
      if (this.balance >= amount) {
         return this.balance -= amount;
      } 
      else if (this.balance - amount < 100) {
          return -1; 
          }
          return this.balance 
          }

}

export class FedexAccount {
 sendMail(recipient:string){
    console.log(`send to ${recipient}`);
 }
 recieveMail(sender:string){
  console.log(`receive from ${sender}`);
 }
}

export class KazPostAccount extends FedexAccount{
  bankAccount: BankAccount;
  constructor(bankAccount: BankAccount) {
    super();
    this.bankAccount = bankAccount;
  }
  withdraw(amount: number) {
    return this.bankAccount.withdraw(amount);
  }
sendMail(recipient:string){
  return super.sendMail(recipient)};
  recieveMail(sender:string){
    return super.recieveMail(sender)};
}

type withdraw = BankAccount[]| KazPostAccount[];
type sendLetterTo = FedexAccount[] | KazPostAccount[];
export function withdrawMoney(accounts:withdraw, amount:number) {
for (const account of accounts) {
  account.withdraw(amount);
}
}

export function sendLetterTo(accounts:sendLetterTo, recipient:string){
for (const account of accounts) {
  account.sendMail(recipient);
}
}
