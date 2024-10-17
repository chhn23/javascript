function sayMyName(){
    console.log("Hello world")
}
sayMyName()
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(3,4));
console.log(sum(3,"b"));
console.log(sum(3,null));
function displayUserName(username){
    if(username===undefined){
        console.log("provide username");

    }
    console.log(`hello ${username}`);
}

function displayUserName1(username){
    if(!username){
        console.log("provide username");

    }
    console.log(`hello ${username}`);
}

function displayUserName2(username='sam'){
    console.log(`hello ${username}`);
}
displayUserName2()

function calculatePrice(...num1){
    return num1;
}
console.log(calculatePrice(200,300,400));
console.log(calculatePrice(200,300,400,true));

function calculatePrice1(val1,val2,...num1){
    return num1;
}
console.log(calculatePrice1(200,300,400,500));