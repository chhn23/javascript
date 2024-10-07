let marvelHeroes=["ironman","thor","captain"]
let dcheroes=["superman","batman","flash"]
// marvelHeroes.push(dcheroes)
// console.log(marvelHeroes)
let concatarr=marvelHeroes.concat(dcheroes)
console.log(concatarr)
let allHeroes=[...marvelHeroes,...dcheroes]
console.log(allHeroes)
let complexarr=[1,2,3,4,[5,6,7],8,9,[6,7,[8,9,0]]];
let flatarr=complexarr.flat(Infinity)
console.log(flatarr)
console.log(Array.isArray("Deepak"))
console.log(Array.isArray([1,2]))
console.log(Array.from("Deepak"))
console.log(Array.from({"name":"Dpk"}))
console.log(Array.of(100,200,3000))