var invoices = {
  unpaid: [],
};

invoices.add = function(clientName, owedAmount) {
  this.unpaid.push({
    name: clientName,
    amount: owedAmount,
  })
}

// invoices.add('Hardware store', 5612);
invoices;

invoices.totalDue = function() {
  return this.unpaid.reduce((acc, client) => {
    return acc + client.amount
  }, 0)
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.totalDue();

invoices.paid = [];

invoices;

invoices.payInvoice = function(name) {
  let stillUnpaid = [];

  this.unpaid.forEach(client => {
    if (client.name === name) {
      this.paid.push(client);
    } else {
      stillUnpaid.push(client);
    }
  })

  this.unpaid = stillUnpaid;
}

invoices.totalPaid = function() {
  return this.paid.reduce((acc, client) => {
    return acc + client.amount;
  }, 0)
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
