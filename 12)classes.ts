class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  // balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  private calculateTax() {
    console.log("I am a private method!!");
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount!!");
    }
    this._balance = this._balance + amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(balance: number) {
    this._balance = balance;
  }
}

const ac1 = new Account(1, "nandika", 230000);

console.log(ac1.balance);
ac1.deposit(45000);
console.log(ac1.balance);
ac1.deposit(100);

ac1.balance = 300000;
console.log(ac1.balance);
