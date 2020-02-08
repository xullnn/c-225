let newId = function() {
  let id = 100;

  return function() {
    id += 1;
    return id;
  };
}();

function makeAccount() {
  let balance = 0,
      transaction = [],
      id = newId();

  return {
    deposit: function(amount) {
      balance += amount;
      transaction.push({
        type: 'deposit',
        amount: amount,
      });
      return amount;
    },

    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
      } else {
        amount = balance
        balance = 0;
      };

      transaction.push({
        type: 'withdraw',
        amount: amount,
      });

      return amount;
    },

    balance: function() { return balance },

    transaction: function() { return transaction },

    number: function() { return id },
  };
};

// var account = makeAccount();
// account.deposit(15);
// account.balance;
// var otherAccount = makeAccount();
// otherAccount.balance;

function makeBank() {
  let accounts = [];

  return {
    openAccount: function() {
      let newAccount = makeAccount();
      accounts.push(newAccount);
      newAccount.number = 100 + accounts.length;
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      let money = source.withdraw(amount);
      destination.deposit(money);
      return money;
    },

    accounts: function() { return accounts },
  }
};

// var bank = makeBank();
// var account = bank.openAccount();
// account.number;
// bank.accounts;
// bank.accounts[0];
// // {number: 101, balance: 0, transactions: Array[0]}
// var secondAccount = bank.openAccount();
// secondAccount.number;
// // 102
