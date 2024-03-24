interface IsPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}


const me:IsPerson={
    name:"Ronak",
    age:30,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        return amount;
    }
}

const greetPerson=(person:IsPerson)=>{
    console.log('hello',person.name)
}

greetPerson(me)

// import {Invoice} from './classes/invoice.js'

// const invOne=new Invoice('mario','Cartoon Character',500);
// const invTwo=new Invoice('Shinchan','Cartoon Character',100);

// console.log(invOne,invTwo)


// const invoices:Invoice[]=[]
// invoices.push(invOne)
// invoices.push(invTwo)


// console.log(invOne)

// invOne.setter(21)

// console.log(invOne)


// invoices.forEach(inv=>{
//     console.log(inv.client,inv.details,inv.amount,inv.format())
// })

// console.log(invoices)


// const anchor=document.querySelector('a')!;
// console.log(anchor.href)

//const form=document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

// const type=document.querySelector('#type') as HTMLSelectElement;
// const toform=document.querySelector('#tofrom') as HTMLInputElement;
// const details=document.querySelector('#details') as HTMLInputElement;
// const amount=document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit',(e:Event)=>{
//     e.preventDefault();
//     console.log(type.value,toform.value,details.value,amount.value)
// })