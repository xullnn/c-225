// var account = {
//   balance: 0,
//   transactions: [],
//   deposit: function(amount) {
//     this.balance += amount;
//     this.transactions.push({type: 'deposit', amount: amount});
//     return amount;
//   },
//
//   withdraw: function(amount) {
//     if (this.balance < amount) amount = this.balance;
//     this.balance -= amount;
//     this.transactions.push({type: 'withdraw', amount: amount});
//     return amount;
//   },
// };

// object factory

function makeAccount(number) {
  var balance = 0;
  var transactions = [];
  var number = number;
  return {
    number: function() {
      return number;
    },
    balance: function() {
      return balance;
    },
    transactions: function() {
      return transactions;
    },

    deposit: function(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount});
      return amount;
    },

    withdraw: function(amount) {
      if (this.balance < amount) amount = balance;
      balance -= amount;
      transactions.push({type: 'withdraw', amount: amount});
      return amount;
    },
  }
}

function makeBank() {
  var accounts = [];
  return {
    openAccount: function() {
      var number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(source, destination, amount) {
      // should I first verify the existence of the passed accounts
      if (accounts.includes(source) && accounts.includes(destination)) {
        source.withdraw(amount);
        destination.deposit(amount);
        return amount;
      }
    }
  }
}

var bank = makeBank();
var account = bank.openAccount();
account.balance();
account.deposit(17);
var secondAccount = bank.openAccount();
secondAccount.number();
account.transactions();
