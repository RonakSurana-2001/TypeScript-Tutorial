let func1:(a:number,b:number)=>void

func1=(num1:number,num2:number)=>{
    console.log(num1+num2)
}

func1(2,11)

type typeObj={a:string,b:string}

let func2:(obj:typeObj)=>string;

func2=(obj:typeObj)=>{
    return obj.a+obj.b
}

console.log(func2({a:"Hello ",b:"ronak"}))