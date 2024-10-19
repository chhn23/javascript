// for(let j=0;j<=10;j++){
//     console.log(`outer loop ${j}`);
//     for(let i=0;i<=10;i++){
//         console.log(`inner loop ${i}`);
//     }
// }

let myarray=["batman","robin","superman"]
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i])
}

    for(let i=0;i<=10;i++){
        if(i==5){
            console.log("detected 5")
            break;
        }
        console.log(`${i}`);
    }
    for(let j=0;j<=10;j++){
        if(j==5){
            console.log("detected 5")
            continue;
        }
        console.log(`${j}`);
    }


let score=1;
do{
    console.log("score is "+score);
    score++;
}while(score<=10)    




//**************************FOR OF********************************** */
const arr=[1,2,3,4,5,6]
for (const element of arr) {
    console.log(element)
}

const greet="hello greetings!"
for (const element of greet) {
    console.log(element)
}

//Maps
const map=new Map();
map.set("IN","INDIA")
map.set("US","USA")
console.log(map)
for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key,value)
}

//Object

// let myObj={
//     "game1":"NFS",
//     "game2":"GTA"
// }
// for (const [key,value] of myObj) {
//     console.log(key,":-",value)  //will give error as object is not iterable
// }


//****************************************************** */
let myObject={
    "js":"javascript",
    "cpp":"c++",
    "rb":"ruby"
}    
for(const key in myObject){
    console.log(`value of ${key} is ${myObject[key]}`)
}

let programming=["c++","ruby","java","node"]
for (const key in programming) {
    console.log(key)
}
for (const key in programming) {
    console.log(programming[key])
}

for (const key in map) {
    console.log(key) //wont work as map is not iterable
}

programming.forEach(function (item){
    console.log("foreach")
    console.log(item)
})
programming.forEach((item)=>{
    console.log("arrow function")
    console.log(item)
})
programming.forEach((item,index,arr)=>{
    console.log("all arguments")
    console.log(item,index,arr)
})

const mycoding=[{
    "langname":"javascript",
    "filename":".js"
},
{
    "langname":"java",
    "filename":".java"
},
{
    "langname":"python",
    "filename":".py"
}]
console.log("foreach::::::::::::::")
mycoding.forEach(element => {
    console.log(element.langname)
});