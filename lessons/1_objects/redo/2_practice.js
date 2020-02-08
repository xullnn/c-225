let invoices = {
  unpaid: [],
  paid: [],

  add: function(client_name, owing) {
    this.unpaid.push({name: client_name, amount: owing});
  },

  totalDue: function() {
    return this.unpaid.reduce((acc, client) => { return acc + client.amount }, 0);
  },

  payInvoice: function(client_name) {
    let notPaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === client_name) {
        this.paid.push(invoice);
      } else {
        notPaid.push(invoice);
      }
    })

    this.unpaid = notPaid;
  },

  totalPaid: function() {
    return this.paid.reduce((acc, client) => { return acc + client.amount }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
