const score = 400 // not specific type for score
// console.log(score);

const balance = new Number(100) // this object method using new keyword give number specific property
// console.log(balance) // 
// console.log(balance.toString) // this gives balance string property and can access methods of string/
// console.log(balance.toFixed(2)) // use in ecommers app

const otherNumber = 123.4666;
// console.log(otherNumber.toPrecision(4)); // this works better in 3 digit round off etc

const hundred = 10000000;
     // console.log(hundred.toLocaleString()); this convert no. in US No. System
// console.log(hundred.toLocaleString('en-IN')); // this convert acc to indian rs

// Number Data Type Can get various method with this datatype
//++++++++++++++++++++++++++++++++++MAthS+++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); // minus 4 becomes 4 
// console.log(Math.round(4.7)); // do round off
// console.log(Math.ceil(4.7)); // top most value will be consider
// console.log(Math.floor(4.7)); // base value losest onr
// console.log(Math.min(4,4,2,4,252)); // do min of array simiLARTY  max also work

// console.log(Math.random()); // will give 0-1 digit in decimal
// console.log(Math.random()*10); // to make this usefull 1-10
// console.log(Math.floor(Math.random()*10)+1); // to avoid 0 case in first line & floor to round of lowest value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// +min Is to have 10 in must , max-mnin to get range 