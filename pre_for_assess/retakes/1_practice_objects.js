var invoices = {
  unpaid: [],
};

invoices.add = function(name, amount) {
  this.unpaid.push({
    name: name,
    amount: amount,
  });
}

invoices.totalDue = function() {
  return this.unpaid.map(u => u.amount).reduce((a, b) => a + b);
}

// test 1

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);

invoices.totalDue();

// test 1 end

invoices.paid = [];

invoices.payInvoice = function(name) {
  let temp = [];
  for(let i = 0; i < this.unpaid.length; i += 1) {
    if (name === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i])
    } else {
      temp.push(this.unpaid[i])
    };
  };

  this.unpaid = temp;
}

invoices.totoalPaid = function() {
  return this.paid.map(u => u.amount).reduce((a, b) => a + b);
}

// test 2
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

invoices.totoalPaid();
invoices.totalDue();
