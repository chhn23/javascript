//const user= new Object();
let user={
    "email":"something@gmail.com",
    "fullNAme":"fname"
}
console.log(user);
const regularUser={
    "email":"something@gmail.com",
    "fullNAme":{
        "userfullName":{
            "firstName":"Deepak",
            "lastName":"Chauhan"
        }
    }
};
console.log(regularUser.fullNAme.userfullName.firstName)
const obj1={
    1:"a",
    2:"b"
};
const obj2={
    3:"c",
    4:"d"
}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)
const users=[{
    "id":1,
    "name":"n1"
},{
    "id":2,
    "name":"n2"
}]
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('isloggedin'))


/*Destructuring of objects*/
const course={
    "courseaName":"hindi",
    "coursePrice":999,
    "instructor":"hitesh"
}
//course.coursePrice
const {courseaName}=course;
console.log(courseaName)
const {courseaName:courseNm}=course;
console.log(courseNm)
// {
//     "name":"n1",
//     "id":123
// };