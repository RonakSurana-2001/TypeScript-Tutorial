let fruits=["apple","mango","banana"]

fruits.push("orange")
// fruits.push(2)


let numberStrings=["apple",3]
// let numberStrings=["apple",3,{}]   Special Case-->2

console.log(typeof(numberStrings[2]))

numberStrings.push(3)
// numberStrings.push({name:"ronak"}) -->works in 2
numberStrings.push("orange")
// numberStrings.push(true) -->Works in 2

let obj={
    name:"Ronak",
    age:22
}

obj.name=""
obj.age=2

