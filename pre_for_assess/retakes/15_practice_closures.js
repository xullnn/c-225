function makeAccount(id) {
  var balance = 0;
  var transactions = [];

  return {
    number: function() {
      return id;
    },

    balance: function() {
      return balance;
    },

    transactions: function() {
      return transactions;
    },

    deposit: function(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount})
      return amount;
    },

    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        amount = balance;
        balance = 0;
      }

      transactions.push({type: 'withdraw', amount: amount})
      return amount;
    },
  };
}

function makeBank() {
  var id = 100;
  var accounts = [];

  return {
    openAccount: function() {
      let newNumber = accounts.length + 101
      let newAccount = makeAccount(newNumber);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      destination.deposit(source.withdraw(amount));
      return amount;
    }
  };
}

// var bank = makeBank();
// var account = bank.openAccount();
// account.number;
// // 101
// bank.accounts;
// // [{...}]
// bank.accounts[0];
// // {number: 101, balance: 0, transactions: Array[0]}
// var secondAccount = bank.openAccount();
// secondAccount.number;
// // 102

// var bank = makeBank();
// var source = bank.openAccount();
// source.deposit(10);
// // 10
// var destination = bank.openAccount();
// bank.transfer(source, destination, 7);
// // 7
// source.balance;
// // 3
// destination.balance;
// // 7

var bank = makeBank();
var account = bank.openAccount();
account.balance();
// 0
account.deposit(17);
// 17
var secondAccount = bank.openAccount();
secondAccount.number();
// 102
account.transactions();
// [Object]
