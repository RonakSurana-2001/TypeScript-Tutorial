import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
var invOne = new Invoice('mario', 'Cartoon Character', 500);
var invTwo = new Invoice('Shinchan', 'Cartoon Character', 100);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var toform = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value == "invoice") {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc)
    list.render(doc, type.value, 'end');
});
