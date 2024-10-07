/*singleton
when object is constructed using constructor it singleton using Object.create()
*/

//object literals
const mysmb=Symbol("key1")
const obj={
    name:"dpk",
    age:27,
    [mysmb]:"value1",
    isActive:true
}
console.log(obj.name)
console.log(obj["age"])
console.log(obj[mysmb])
obj.age=89;
console.log(obj.age)
//Object.freeze(obj) //wont change the values of object
obj.age=28;
console.log(obj.age)
obj.greeting = function (){
    console.log("hello js user")
}
obj.greeting2=function(){
    console.log(`hello js user,${obj.name}`)
}
//console.log(obj.greeting) //will give [Function (anonymous)]
console.log(obj.greeting())
console.log(obj.greeting2())

