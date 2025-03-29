// //ES6

// class User {
//     // Method
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     // Method 
//     encyptPassword(){
//         return `Your Encrypted Password id - ${this.password}`
//     }
//     // Method
//     changeUsername(){
//         return (this.username.toUpperCase())
//     }
// }

// const chai = new User("Chai","Chai@gmail.com","123")
// console.log(chai);
// const newChai = chai.changeUsername()
// console.log(newChai);

// Behind The Scene
 
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encyptPassword = function(){
    return `Your Encypted Password is ${this.password}`
}
User.prototype.changeUsername = function(){
    return (this.username.toUpperCase())
}

const tea = new User("tea","tea@google.com","2334")
console.log(tea) // User { username: 'tea', email: 'tea@google.com', password: '2334' }
console.log(tea.changeUsername()); // TEA
