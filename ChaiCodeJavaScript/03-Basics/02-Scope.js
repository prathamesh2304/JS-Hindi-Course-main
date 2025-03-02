var c = 300
let a = 300

if(true){

    let a = 10
    console.log("INNER:",a);
    const b = 20
    var c = 30
    
}

// console.log(a);
// console.log(b);
console.log(c); // var will give us o/p of 30

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("-------------------");

function one(){

    const username = "Hitesh"

        function two(){
            const website = "Youtube"
            console.log(username);
        }
        // console.log(website); // website is not defined
        
    two()
}
one()

if(true){
    const username = "Hitesh"
        if(username === "Hitesh"){
            const website = " Youtube"
            console.log(username + website); // Hitesh Youtube
            
        }
// console.log(website);// website is not defined
}
// console.log(username); // username is not defined

addOne(4) // chalega aab yaha

function addOne(num1){

        return num1 + 1
}

// addOne(4) 1st Yaha Tha

console.log(addTwo(4)) //  Cannot access 'addTwo' before initialization 
// function ko ik varibale mein declare kare
const  addTwo = function(num1){ // expression,variable
        return num1 + 2
}

// console.log(addTwo(4)) // chalega