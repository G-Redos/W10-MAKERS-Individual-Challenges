class User {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(credit) {
    this.balance += credit;
    this.#save(credit, 0);
  }

  withdraw(debit) {
    this.balance -= debit;
    this.#save(0, debit);
  }

  print() {
    let statementToPrint = "date || credit || debit || balance\n";
    for (let index = 0; index < this.statement.length; index++) {
      const transaction = this.statement[index]
      statementToPrint += `${transaction.date} || ${transaction.credit.toFixed(2)} || ${transaction.debit.toFixed(2)} || ${transaction.balance.toFixed(2)}\n`;
    }
    return statementToPrint;
  }

  #save(credit, debit) {
    const today = new Date();
    const statement = {
      date: today.toLocaleDateString("en-GB"),
      credit: credit,
      debit: debit,
      balance: this.balance,
    };
    this.statement.push(statement);
  }
}

module.exports = User;
