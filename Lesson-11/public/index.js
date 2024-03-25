var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var values;
    values = [toform.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value == "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
//Generics
var addUid = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUid({ name: "Ronak", age: 11 });
//enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PEN"] = 1] = "PEN";
    ResourceType[ResourceType["PENCIL"] = 2] = "PENCIL";
    ResourceType[ResourceType["ERASER"] = 3] = "ERASER";
})(ResourceType || (ResourceType = {}));
var docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        name: "ronak"
    }
};
var docFour = {
    uid: 1,
    resourceName: ResourceType.ERASER,
    data: [1]
};
console.log(docThree, docFour);
//Tuples
var arr = ['ronak', 22, true];
arr[0] = false;
arr = [30, 'yoshi'];
var tup = [21, true, 'ron'];
tup[2] = 'ken';
