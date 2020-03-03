// - function as object factory
//   - factory object creation pattern
//   - full copies of methods(redundant)
//   - not traceable

function createInvoice(services) {
  if (!services) services = {};

  let internet = services.internet || 5500,
      phone = services.phone || 3000;

  return {
    internet: internet,
    phone: phone,
    payments: [],
    total: function() { return this.internet + this.phone },
    addPayment: function(payment) { this.payments.push(payment) },
    addPayments: function(payments) { this.payments = this.payments.concat(payments) },
    amountDue: function() {
      let totalPay = this.payments.reduce((acc, e) => { return acc + e.total() }, 0);
      return this.total() - totalPay;
    }
  }
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000

// -------------------------------------------

function createPayment(services) {
  services.total = function() {
    if (this.amount) {
      return this.amount;
    } else {
      this.internet = this.internet || 0;
      this.phone = this.phone || 0;
      return this.internet + this.phone;
    }
  }

  return services;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
// payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// ------------------------------------------------------

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
