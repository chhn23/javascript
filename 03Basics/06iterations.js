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

//****************************************************** */
let myObject={
    "js":"javascript",
    "cpp":"c++",
    "rb":"ruby"
}    
for(const key in myObject){
    console.log(`value of ${key} is ${myObject[key]}`)
}