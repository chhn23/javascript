let user={
    "username":"deepak",
    "price":1000,
    welcomeMsg: function (){
        console.log(`welcome ${this.username}`)
        //console.log(this)
    }
}

 user.welcomeMsg()
 console.log(this) //in browser you will get window object for this log
// user.username="sam"
// user.welcomeMsg()




// function chai(){
//     let username="deepak"
//     console.log(this.username)
//     console.log(this)
// }
// //Inside function you cant use this keyword
// chai();


// const chai=function (){
//     let username="deepak"
//     console.log(this.username)
//     console.log(this)
// }
// //Inside function you cant use this keyword
// chai();


// const chai=()=>{
//     let username="deepak"
//     console.log(this.username)
//     console.log(this)
// }
// //Inside function you cant use this keyword
// chai();


// const sumOfTwo=(n1,n2)=>{
//     return n1+n2;
// }

// console.log(sumOfTwo(1,8))


//const sumOfTwo=(n1,n2)=> n1+n2
// const sumOfTwo=(n1,n2)=> (n1+n2)

//const sumOfTwo=(n1,n2)=>{"username":"dpk"} //cant return object like this in arrow function
const sumOfTwo=(n1,n2)=>({"username":"dpk"}) 

console.log(sumOfTwo(1,8))