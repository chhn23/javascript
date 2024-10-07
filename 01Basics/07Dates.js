const date =new Date()
console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(typeof date)
let newdate=new Date(2023,0,23)
console.log(`new date ${newdate}`)

let timestamp=Date.now();
console.log(timestamp)