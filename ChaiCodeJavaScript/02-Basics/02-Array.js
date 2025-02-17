const Marvel_Heros = ["IronMan","Thor","AntMan","SpiderMan"]
const DC_Heros = ["BatMan","Splash","SuperMan"]

// Marvel_Heros.push(DC_Heros)
// console.log(Marvel_Heros) // ['IronMan','Thor','AntMan','SpiderMan',[ 'BatMan', 'Splash', 'SuperMan' ]]
// Push Adds Array As Element to another array or array bhi koi bhi data le leti array mein

const NewConArry = Marvel_Heros.concat(DC_Heros)
// console.log(NewConArry) // ['IronMan','Thor','AntMan','SpiderMan','BatMan','Splash','SuperMan']

// to merge array effectively
const AllHeros = [...DC_Heros,...Marvel_Heros]
// console.log(AllHeros) // It is effective way we can easily add another array in AllHeros
// ['IronMan','Thor','AntMan','SpiderMan','BatMan','Splash','SuperMan']

const AnotherSam = [1,2,3,[9,8],[7,[6,5]]]
const FlatArr = AnotherSam.flat(Infinity)
// console.log(FlatArr) // [1, 2, 3, 9, 8, 7, 6, 5]

// console.log(Array.isArray("Pratham")) // false
// console.log(Array.from("Pratham")) // ['P', 'r', 'a','t', 'h', 'a','m']
// console.log(Array.from({ name: "Pratham"})) // []

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2)) // [ 100, 200, 300 ]