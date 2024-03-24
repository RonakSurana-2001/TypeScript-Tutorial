type numberOrString=string

let func1=(a:numberOrString,b:numberOrString):void=>{
    console.log(a+b)
}

type typeObj={name:string,age:number}

let func2=(obj:typeObj)=>{
    console.log(`${obj.name} is object ${obj.age}`)
}

func2({
    name:"ronak",
    age:22
})