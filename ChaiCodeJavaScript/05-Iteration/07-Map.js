const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let myManipulatedNum = myNum.map( (num) => num + 10)
// let myManipulatedNum = myNum.map( (num) => { return num + 10 } )

// console.log(myManipulatedNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log("----Chaining Of Map--------");

const myManipulatedNum = myNum
                        .map( (num) => num + 1) // [2, 3, 4,  5,  6, 7, 8, 9, 10, 11]
                        .map( (num) => num*10) // [20, 30, 40,  50,  60, 70, 80, 90, 100, 110]
                        .filter( (num) => num <= 50 ) // --> [ 20, 30, 40, 50 ]
console.log(myManipulatedNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

