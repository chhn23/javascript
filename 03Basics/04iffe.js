// function connect(){
//     console.log(`DB CONNECTED`)
// }
// connect();


(function connect(){
    console.log(`DB CONNECTED`)
})(); //semi coon is needed to end the scope when you are writing two iffes

((name)=>{
    console.log(`hello ${name}`)
})('dpk')