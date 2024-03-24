let greet:Function

greet=()=>{
    console.log("Hello,again")
}

const add=(a:number,b:number,c:number|string=10):void=>{
    console.log(a+b)
    console.log(c)
}

add(2,3,'20')

const minus=(a:number,b:number):number=>{
    return b-a;
}

let ansMinus=minus(21,45)

console.log(ansMinus)