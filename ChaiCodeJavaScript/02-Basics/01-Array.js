const ArrOfNum = [0,1,2,3,4,5]
const ArrOfVar = ["Dimple","Rishi","Harsh"]
const ArrOfBoo = [true,false,true]
const ArrOfMix = [0,1,2,3,"Dimple","Rishi",true,false,true]

// Another Declaration Of Arrya
const myarr = new Array(5,6,true,false,"Rishi")

// console.log(ArrOfNum)
// console.log(ArrOfVar)
// console.log(ArrOfBoo)
// console.log(ArrOfMix)

// Accessing Elements Of Array
// console.log(ArrOfVar[0]) // Dimple
// console.log(ArrOfVar[1]) // Rishi

// Methods
// console.log("OG",ArrOfNum) //       // OG [ 0, 1, 2, 3, 4, 5 ]
// ArrOfNum.push(10)
// console.log("After Push",ArrOfNum) // After Push [ 0, 1, 2, 3, 4, 5, *10 ] 10 Is Added
// ArrOfNum.pop()
// console.log("After Pop",ArrOfNum) // After Pop [ 0, 1, 2, 3, 4, 5 ] 10 Is Removed
// ArrOfNum.unshift(9)
// console.log("After Unshift",ArrOfNum) // After Unshift [ *9, 0, 1, 2, 3, 4, 5] 9 Is Added At First
// ArrOfNum.shift(9)
// console.log("After Unshift",ArrOfNum) // After Unshift [ 0, 1, 2, 3, 4, 5 ] 9 is removed

// Condition checking in consol
// console.log(ArrOfNum.includes(9)) // false
// console.log(ArrOfNum.includes(1)) // true
// console.log(ArrOfNum.indexOf(9)) // -1
// console.log(ArrOfNum.indexOf(1)) // 1

// join 
const mynewarr = ArrOfVar.join()
const mynewarr1 = ArrOfNum.join()
// console.log(mynewarr) // Dimple,Rishi,Harsh
// console.log(mynewarr1) // 0,1,2,3,4,5
// console.log(typeof(mynewarr)) // Array's type is changed to string
 
// slice and splice
const mynewarr3 = ArrOfNum.slice(1,3)
console.log("OG",ArrOfNum) // OG [ 0, 1, 2, 3, 4, 5 ]
console.log("After Slice",mynewarr3) // After Slice [ 1, 2 ]
const mynewarr4 = ArrOfNum.splice(1,3)
console.log("OG",ArrOfNum) // OG [ 0, 4, 5 ]
console.log("After Splice",mynewarr4) // After Splice [ 1, 2, 3 ] --> Splice operation not only have range diffrence but it also manipulates the original array  