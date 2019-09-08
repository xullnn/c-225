function createInvoice(services) {
  if (services) {
    var phone = services.phone;
    var internet = services.internet;
  }

  return {
    payments: [],
    phone: phone || 3000,
    internet: internet || 5500,

    total: function() { return this.phone + this.internet; },
    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      this.payments = this.payments.concat(payments);
    },

    amountDue: function() {
      return this.total() - paymentTotal(this.payments);
    },
  };
};

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

console.log(invoiceTotal(invoices));

// 2

function createPayment(services) {
  // implement the factory function here
  var services = services || {};
  var phone = services.phone || 0;
  var internet = services.internet || 0;
  var amount = services.amount;

  return {
    phone: phone,
    internet: internet,

    total: function() {
      if (amount) {
        return amount;
      } else {
        return this.phone + this.internet;
      }
    },
  }
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
payments.push(createPayment());
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

console.log(paymentTotal(payments));

// 3

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
invoice.amountDue();       // this should return 0
