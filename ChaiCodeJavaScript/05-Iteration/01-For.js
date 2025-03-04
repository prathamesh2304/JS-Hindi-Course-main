console.log("----Number-----");

for (let index = 0; index <= 4; index++) {
    const element = index
    console.log(element);
    
}

console.log("----------");

for (let index = 0; index <= 6; index++) {
    const element = index
    if (element == 5) {
        console.log("Aagaya 5");
                
    }
    console.log(element);
    
}

console.log("----Loop------");

for (let i = 0; i <= 3; i++) {
    const element = i;
    console.log(`Outter loop ${element}`);
    
    for (let j = 0; j <= 2; j++) {
        const element1 = j;
        console.log(`Inner loop value ${element} number ${element1}`);
        
    }
    
}

console.log("----Table------");

for (let i = 0; i <= 3; i++) {
    console.log(`Table Of ${i}`);
    
    for (let j = 0; j <= 2; j++) {
        console.log(`${i}*${j} =`,i*j);
        
    }
    
}

console.log("----Array------");

let myArray = ["Prince","Neha","Elvish","Rhea"]
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log("----Break & Continue------");

for (let index = 0; index <= 8; index++) {
    const element = index
    if (element == 5) {
        console.log("Aagaya 5");
        continue // 5 will be skipped
    }
    console.log(element);
    
}
for (let index = 0; index <= 8; index++) {
    const element = index
    if (element == 5) {
        console.log("Aagaya 5");
        break // o/p will stop at 5 later will not be prinyed
    }
    console.log(element);
    
}