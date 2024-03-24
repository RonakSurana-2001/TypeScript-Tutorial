import { ListTemplate } from './classes/ListTemplate.js';
import {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const invOne=new Invoice('mario','Cartoon Character',500);
const invTwo=new Invoice('Shinchan','Cartoon Character',100);

const invoices:Invoice[]=[]
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv=>{
    console.log(inv.client,inv.amount,inv.format())
})


const form=document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type=document.querySelector('#type') as HTMLSelectElement;
const toform=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul)


form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter
    if(type.value=="invoice"){
        doc=new Invoice(toform.value,details.value,amount.valueAsNumber)
    }
    else{
        doc=new Payment(toform.value,details.value,amount.valueAsNumber)
    }
    // console.log(doc)
    list.render(doc,type.value,'end')
})