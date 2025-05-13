class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // Getter must have to give return statement
    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email = value;
    }

    get password(){
        // return this.password.toUpperCase()  // Maximum call stack size exceeded 
        //                                     // at get password [as password]
        return this._password.toUpperCase() // changed password name to _password
    }

    set password(value){
        // this.password = value // Maximum call stack size exceeded 
                                 // at set password [as password]
        this._password = value;
    }

}


const hitesh = new User("sample@hitesh","abc")
console.log(hitesh.password); // i/p -> abc o/p -> ABC
console.log(hitesh.email); // i/p -> sample@hitesh o/p -> SAMPLE@HITESH
