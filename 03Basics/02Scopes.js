 let a=10;
// const b=20;
 var c=300;
//scope:{}
if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log("INNER a"+a)
}
console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username="deepak";
    function two(){
        const website="google.com"
        console.log(`inside two ${username}`)
    }
    //console.log(`website in one ${website}`)
    two()
}

one()
//###############################################
console.log(add1(7))
function add1(num){
    return num+1;
}
add1(5)

//console.log(add2(7)) cant access function before in case of expression
const add2= function(num){
    return num+2;
}
console.log(add1(9))