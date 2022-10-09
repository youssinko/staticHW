class BankAccount{
    constructor(ownerName,balance,acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.accountNum = acctNum

    }
    deposit(money){
        let positiveBalance = money + this.balance
        console.log (`Your new balance now is ${positiveBalance}`)

    }
     withdraw(takeAway){
        let newBalance = this.balance - takeAway
   
        console.log(`Your new balance now is ${newBalance}`)

    }
}
const owner = new BankAccount ('Tom',500,'24947')
owner.deposit(400)
owner.withdraw(300)
//===================================
class CheckingAccount extends BankAccount{
  
    constructor(ownerName,balance,acctNum,overDraftEnabled){
    super(ownerName,balance,acctNum)
    this.overDraft = overDraftEnabled
    }
    
    withdraw(takeAway){
        if(this.balance < takeAway){
            this.overDraft = this.balance - takeAway
            console.log(`Your balance is negative, overdraft balance now is: ${this.overDraft}`)
        }
    
    }
}
const owner2 = new CheckingAccount('yousef',500,'23876')
owner2.withdraw(800)
//==========================
class SavingsAccount extends BankAccount{
    

withdraw(takeAway){
    let notAllowed = this.balance - takeAway
            

         if(notAllowed === -500){
         console.log(`your account is now locked due to exceeding overdraft allowed`)
      }
    }
}
const owner3 = new SavingsAccount('Amir',500,'23776')
owner3.withdraw(1000)