const User = require("./user");

describe("User model", () => {
  it("can deposit money", () => {
    const user = new User();
    user.deposit(1000);
    expect(user.balance).toBe(1000);
  });

  it("can withdraw money", () => {
    const user = new User();
    user.deposit(1000);
    user.withdraw(100);
    expect(user.balance).toBe(900);
  });

  it("can print account statement", () => {
    const user = new User();
    user.deposit(1000);
    user.withdraw(100);
    const date = new Date();
    const today = date.toLocaleDateString("en-GB");
    expect(user.print()).toEqual(
      "date || credit || debit || balance\n" +
        `${today} || 1000.00 || 0.00 || 1000.00\n` +
        `${today} || 0.00 || 100.00 || 900.00\n`
    );
  });
});
