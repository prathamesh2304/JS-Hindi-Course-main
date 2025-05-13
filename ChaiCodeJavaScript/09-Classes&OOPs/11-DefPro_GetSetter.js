/*
1. Private Property:
    The _email property is used internally to store the email value.
    The getter and setter access this private property 
    instead of directly using email.
2. Getter:
    The get function returns the _email value in uppercase.
3. Setter:
    The set function updates the _email value
    when email is assigned a new value.
*/

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const hitesh = new User("chai@gmail.com", "meri@chai23")
console.log(hitesh.email); // i/p -> chai@gmail.com o/p -> CHAI@GMAIL.COM
console.log(hitesh.password); // i/p -> meri@chai23 o/p -> MERI@CHAI23

