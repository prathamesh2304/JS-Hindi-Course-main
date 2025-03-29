class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);   
    }
}
// SUPREME CLASS
class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email =  email;
        this.password = password;
    }

    addCourse(){
        console.log(`The Course Was Done By : ${this.username}`);        
    }
}

const chai = new User("Chai","Chai@Google.com","123")

chai.logMe() // USERNAME : Chai

const teacherWaliChai = new Teacher("TeacherKiChai","Teacher@chai.com","14434")

teacherWaliChai.addCourse() // The Course Was Done By : TeacherKiChai

const masalaChai = new User("MasalaChai","Masala@chai.com","3840")

// ----> masalaChai.addCourse() // TypeError: masalaChai.addCourse is not a function --> User ka instance hai toh User ke associated fucntion ko hi acccess kar sakte
masalaChai.logMe() // USERNAME : MasalaChai

console.log(chai === Teacher);// false
// "chai" instance hai "Teacher" ka; yahi check karne ke liye 

console.log(teacherWaliChai instanceof Teacher); // true









