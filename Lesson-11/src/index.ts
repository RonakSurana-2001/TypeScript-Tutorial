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

    let values:[string,string,number]
    values=[toform.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter
    if(type.value=="invoice"){
        doc=new Invoice(...values)
    }
    else{
        doc=new Payment(...values)
    }
    console.log(doc)
    list.render(doc,type.value,'end')
})

//Generics

const addUid=<T extends {name:string}>(obj:T)=>{
    let uid=Math.floor(Math.random()*100)
    return {...obj,uid};
}

let docOne=addUid({name:"Ronak",age:11})

//enums

enum ResourceType {BOOK,PEN,PENCIL,ERASER}

interface Resource<T>{
    uid:number,
    resourceName:ResourceType,
    data:T
}


const docThree:Resource<object>={
    uid:1,
    resourceName:ResourceType.BOOK,
    data:{
        name:"ronak"
    }
}

const docFour:Resource<number[]>={
    uid:1,
    resourceName:ResourceType.ERASER,
    data:[1]
}

console.log(docThree,docFour)

//Tuples

let arr=['ronak',22,true]
arr[0]=false
arr=[30,'yoshi']

let tup:[number,boolean,string]=[21,true,'ron']
tup[2]='ken'
