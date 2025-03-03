const user = {
    username: "Prathamesh",
    price: 999,

    welcomeFucntion: function(){
        console.log(`${this.username}, Welcome To Website`); // this denotes scope of username we are using & the scope of 
        // this well only b/w the user object
       
        // console.log(this); 
                     /* {
                     username: 'Prathamesh',
                     price: 999,
                     welcomeFucntion: [Function: welcomeFucntion]
                     } */
        
    }
}
// console.log(this); // {}

console.log(user.welcomeFucntion());
user.username = "Aniket"
// console.log(user.welcomeFucntion());
console.log("----- This --------");

// function chai(){
//     let username = "Pratham"
//     console.log(this.username);      // Same
// }

// chai()

// const chai = function(){
//     let username = "Pratham"
//     console.log(this.username);     // Same As previous
// }
// chai()

console.log("----- Arrow Function --------------");

const chai = () => {
    let username = "Om"
    console.log(this.username)
}

chai()
console.log("-------Arrow Fun Ex--------");

// const addTwo = (num1,num2) => {  // curly brases mein return likhana hi padta
//     return num1 + num2           // Explicit Return
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2) // usefull in react // Implicite Return
const addTwo = (num1,num2) => ({username:"Arrow Function"})



console.log("Addititon is",addTwo(2,3));
