console.log("----Number----");

let index = 1
while ( index <= 5 ) {
    console.log(`Index is ${index}`);
    index = index + 1;
    
}

console.log("----Array----");

let gangLeaders = ["Prince","Neha","Elvish","Rhea"]
let counter = 0
while (counter < gangLeaders.length) {
    for (let i = 0; i < gangLeaders.length; i++) {
        console.log(`Gang ${i} Gang Leader ${gangLeaders[counter]}`);
        counter++
    }
    
}

console.log("----Do While----");

let counter1 = 0 // already declared
do {
    console.log(counter1);
      counter1++  
} while (counter1<=3);

console.log("----Do While 2----");

let counter2 = 4// 
do {
    console.log(counter1); // special thing about do while 4 is already printed and coundition id false
      counter1++  
} while (counter1<=3);