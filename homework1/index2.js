
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayproduct(){
        console.log("Product:", this.name);
        console.log(`price: $${this.price}`);
    }
}

const product1 = new Product("shirt", 20);
product1. displayproduct();

class Rectangle{
    constructor(_width, height, color){
        this.width = _width;
        this.height = height;
        this.color = color;
    }
}

let Rectangle1 = new Rectangle(5, 6, "blue");

function typefunction(height, width){
    return height * width;
}


console.log(typefunction(5,7));



class Car{
    #serialnumber;
    constructor(make, model, year){
        this.#serialnumber = make + year;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(){
        return `${this.make} ${this.model} ${this.year}`;

    }

    displayInfo(){
        return this.#privatemethod();
    }

    #privatemethod(){
        return `Car: ${this.year} ${this.make} ${this.model} ${this.#serialnumber}`;
    }

    newmethod(make, model){
        this.make = make;
        this.model = model;

    }
}

const tesla = new Car("Tesla", "Model 4", "2022");

console.log(tesla.displayInfo());
tesla.newmethod("Volvo", "Model 2");
console.log(tesla.displayInfo());
console.log(tesla.serialnumber);


console.log(tesla.displayInfo());

class Bankaccount{
    constructor(accountholderName, balance, accountNumber){
        this.accountholderName = accountholderName;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    deposit(amount){
        this.balance += amount;

        return `CREDIT: Your current balance is ${this.balance}`;
    }

    withdrawal(amount){
        this.balance -= amount;

        return `DEBIT: Your current balance is ${this.balance}`;
    }

    getBalance(){
        return `Your current balance is ${this.balance}`;
    }

   transfer(amount, accountNumber){
        this.balance -=amount;
        return `You have successfully transferred ${amount} to ${accountNumber}. Your current balance is ${this.balance}`;
   }
}

const Account1 = new Bankaccount("Kenechukwu Josiah Onwe", 1000, 1111111111111);
const Account2 = new Bankaccount("John Doe", 1000, 1111111111111);

/*console.log(Account1.Bankaccount());*/
console.log(Account2);

console.log(
    Account1.accountholderName,
    Account1.accountNumber,
    Account1.balance
)

console.log(Account1.deposit(200));
console.log(Account1.getBalance());
console.log(Account1.withdrawal(700));
console.log(Account1.getBalance());
console.log(Account1.transfer(200, 1212121212));
console.log(Account1.getBalance());

