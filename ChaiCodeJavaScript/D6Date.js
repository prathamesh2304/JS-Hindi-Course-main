/*
 let myDate = new Date()
console.log(myDate.toString()) 
  o/p -> Mon Nov 11 2024 16:31:38 GMT+0000
console.log(myDate.toISOString()) 
  o/p -> 2024-11-11T16:33:49.580Z
console.log(myDate.toLocaleDateString())
  o/p -> 11/11/2024  
console.log(typeof(myDate))
  o/p -> object
*/

let myNewDate = new Date(2023,5,8) 
/*
  -> Thu Jun 08 2023 00:00:00 GMT+0000 
let myNewDate = new Date(2023,5,8,6,8,59)
  -> 6/8/2023, 6:08:59 AM 
let myNewDate = new Date("2023-5-8") 
  -> YYYY-DD-MM Format
let myNewDate = new Date("8-5-2023") 
  ->  DD-MM-YYYY Format
*/

let newTimeStamp = Date.now()
/*
console.log(newTimeStamp)
 -> 1731433121604 
console.log(myNewDate.getTime())
 -> 1686182400000
console.log(Date.now()/1000);
 -> 1731433683.022
console.log(Math.floor(Date.now()/1000));
 -> 1731433715
*/

let myAnotherDate = new Date()
/* console.log(myAnotherDate)
 -> 2024-11-12T17:54:21.015Z
console.log(myAnotherDate.getDay()) 
 -> 2
console.log(myAnotherDate.getMonth())
 -> 10
console.log(myAnotherDate.getDate())
 -> 12
*/

// People Also Use 
// `${myAnotherDate.getDate()} is the date`
newDate.toLocaleString('default', {
  weekday: "long",
})