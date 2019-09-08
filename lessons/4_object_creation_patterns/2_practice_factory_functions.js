// all methods get copied, this can be redundant
// hard to verify the identity of an object such as is it an object created by
  // a function, if it is, what the function looks like

// 2

function makeObj() {
  var obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

// rewrite

function makeObj() {
  return {
    propA: 20,
    propB: 20,
  }
}

// 3

var invoice = {
  phone: 3000,
  internet: 6500,
};

var payment = {
  phone: 1300,
  internet: 5500,
};

var invoiceTotal = invoice.phone + invoice.internet;
var paymentTotal = payment.phone + payment.internet;
var remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700

// ---------

function createInvoice(services) {
  let phone = 3000;
  let internet = 5500;
  if (services) {
    phone = services['phone'] || phone;
    internet = services['internet'] || internet;
  }

  return {
    phone: phone,
    internet: internet,
    total: function() { return phone + internet },
    payments: [],
    addPayment: function(payment) { this.payments.push(payment) },
    addPayments: function(payments) { this.payments = this.payments.concat(payments) },
    amountDue: function() {
      return this.total() - paymentTotal(this.payments);
    }
  };
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

console.log(invoiceTotal(invoices));


// ----------------


function createPayment(services) {
  services = services || {};
  let payment = {};
  if (services['amount']) {
    payment['amount'] = services['amount'];
  } else {
    payment['internet'] = services['internet'] || 0;
    payment['phone'] = services['phone'] || 0;
  }

  payment.total = function() {
    if (this.amount) {
      return this.amount;
    } else {
      return this.internet + this.phone;
    }
  }

  return payment;
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

console.log(paymentTotal(payments));      // => 24000

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
