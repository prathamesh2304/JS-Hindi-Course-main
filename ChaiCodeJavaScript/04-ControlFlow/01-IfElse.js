
const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("User Is Logged In");
    
}

// >,>=,<,<=,==,!=,===(checks data of both variables)
console.log("--------"); 

if (2 === 2 ) {
    console.log(`"===" Works`);
}

if (2 === "2" ) {
    console.log(`"===" Not Works`);
}

console.log("--------");

const temparature = 41

if (temparature < 50) {
    console.log("Temparature is less than 50");   
}
if (temparature > 50) {
    console.log("Temparature is greater than 50");   
}
if (temparature == 41) {
    console.log("Temparature is extact 41");   
}

console.log("--------");

const score = 200

 if (score > 100) {
    var power = "fly"
    console.log(`User Got Power To ${power}`); // User Got Power To fly   
    }
    console.log(`User Got Power To ${power}`); // User Got Power To fly
    //    Bcoz Of this we not prefered to use coz "var" have global scope 
    

/*  if (score > 100) {
        let power = "fly"
        console.log(`User Got Power To ${power}`); // User Got Power To fly   
    }
    console.log(`User Got Power To ${power}`); //  ReferenceError: power is not defined 
    // here the error occurance is good bcoz scope of variable should be limited that's why "let" & "const" */
    
console.log("--------");

const balance = 1000

/* if (balance > 500) console.log("Balance is less than 500"); // implicite scope 
if (balance > 500) console.log("Balance is less than 500"),console.log("Next"); // implicite scope */

if ( balance < 200 ) {
    console.log("Balance Is Less than 200");
    
} else if ( balance < 500 ) {
    console.log("Balance Is Less than 500");
    
} else if ( balance < 750 ) {
    console.log("Balance Is Less than 750");
    
} else if ( balance < 1200) {
    console.log("Balance Is Less than 1200");
    
}
else if ( balance <= 1000) {
    console.log("Balance Is 1000");
}

console.log("--------");

const isHaveDebitCard = true
const isloggedInFromGoogle = false
const isloggedInFromEmail = true

if ( isUserLoggedIn && isHaveDebitCard ) {
    console.log("Your able to buy coures");
    
}

if ( isloggedInFromEmail || isloggedInFromGoogle ) {
    console.log("Welcome To Website");
    
}
