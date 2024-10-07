// primitive values go to stack others go to heap
let myName="Dpk";
let anothername=myName;
console.log(anothername)
anothername="sngh"
console.log(myName)
console.log(anothername)
let userone={
    "name":"dpk",
    "email":"email"
}
console.log(userone.email)
let usertwo=userone;
usertwo.email="email2"
console.log(userone.email)
console.log(usertwo.email)

