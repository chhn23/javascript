let programming=["c++","ruby","java","node"]
let values=programming.forEach(element => {
    return element;
});

console.log(values)

let mynums=[1,2,3,4,5,6,7,8]
// let filterednums=mynums.filter((num)=>num>4)
// console.log(filterednums)

//Case2::
// filterednums=mynums.filter((num)=>{num>4})
// console.log(filterednums)

//Case3:::(if you have opened scope you need to add return)
// filterednums=mynums.filter((num)=>{ return num>4})
// console.log(filterednums)

let newnums=[];
console.log("for each")
mynums.forEach((item)=>{
    if(item>4){
        newnums.push(item)
    }
})
console.log(newnums)


//********************************************************************/
// newnums=mynums.map((num)=>num+10)
// console.log(newnums)

// newnums=mynums.map((num)=>{return num+10})
// console.log(newnums)


newnums=mynums
        .map((num)=>num*10)
        .map((num)=>num+1)
        .filter((num)=>num>50)
console.log(newnums)      


//*********************REDUCE************************* */

const arr=[1,2,3,4,5,6,7,8]
// const result=arr.reduce((acc,currval)=>acc+currval,0)
// console.log(result)

const result=arr.reduce((acc,currval)=>
    {
        console.log(`acc::${acc} currval::${currval}`)
        return acc+currval
    },0)
console.log(result)


const mycoding=[{
    "langname":"javascript",
    "price":1000
},
{
    "langname":"java",
    "price":2000
},
{
    "langname":"python",
    "price":3000
}]

let totalcost=mycoding.reduce((acc,item)=>(acc+item.price),0)
console.log("tottal::"+totalcost)