class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNSME : ${this.username}`);
        
    }

    // static used for this methods those who we want to don't have accese to user in some cases like below
    static createId(){
        return '9843985'
    }
}

const user = new User("Prathamesh")
// Before static 
// console.log(user.createId()) // 9843985
// After static
// console.log(user.createId()) // TypeError: user.createId is not a function

class Teacher extends User{
    constructor(username,email){
        super(username) // super is used to call the constructor of parent class 
        this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@google.com")
// ---> iphone.logMe() // USERNSME : iphone
console.log(iphone.createId()) // TypeError: iphone.createId is not a function