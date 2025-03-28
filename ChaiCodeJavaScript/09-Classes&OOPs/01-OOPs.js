const user = {
    username: "Prathamesh",
    id:"Pt@123.in",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details");
        // console.log(`User:- ${this.username}`); // User:- Prathamesh
        console.log(this); 
        /* {
            username: 'Prathamesh',
            id: 'Pt@123.in',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
            }
        */
        
        
    }
}

console.log(user.username); // Prathamesh
console.log(user.getUserDetails()); // Got User Details , undefined
console.log(this); // {}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, logInCount, isUserLoggedIn){
    // username = username
/*Variable =>*/ this.username = username;
                this.logInCount = logInCount;
                this.isUserLoggedIn = isUserLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`); // greetings: [Function (anonymous)]
        
    }
    return this
}

const userOne = new User("Prathamesh",12, true)
const userTwo = new User("Aniket",23, true) // if we don't use "new" this userOne valused are got overwritted by userTwo
console.log(userOne);
console.log(userOne.constructor); // [Function: User]
