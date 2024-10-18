if(2=="2"){
    console.log("executed a");
}

if(2==="2"){
    console.log("executed b");
}

if(2!=="2"){
    console.log("executed c");
}
let score =200
if(score>100){
    let power= 'fly';
    console.log(` power is ${power}`)
}

//console.log(` power is ${power}`)

//if(score>150) console.log('test1'), console.log('test2')  not a good practice


let month=3
 switch(month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    default:
        console.log("Invalid month")    
 }

 let month2='jan'
 switch(month2){
    case 'jan':
        console.log("january")
        break;
    case 'feb':
        console.log("february")
        break;
    case 'mar':
        console.log("march")
        break;
    default:
        console.log("Invalid month")    
 }
  
 
 let useremail="dpk@gmail.com"
 if(useremail){
    console.log(useremail)
 }else{
    console.log("no mail")
 }


 let user={}
 if(Object.keys(user).length===0){
    console.log("object is empty")
 }

 console.log(false==0)
 console.log(false=='')

 let val1;
//  val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
val1=undefined ?? 15 ??5
 console.log(val1)

//  condition ? true: false

 let age =18
 age<18? console.log("not eligible"): console.log("eligible")
