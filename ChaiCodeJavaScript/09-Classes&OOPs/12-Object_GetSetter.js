const User = {
    _email : 'user@email.com',
    _password : 'user2303',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value
    },
}

const chai = Object.create(User) // aisa object bana like user having properties , similar
console.log(chai.email);// i/p -> user@email.com o/p -> USER@EMAIL.COM
console.log(chai.password);// i/p -> user2303 o/p -> USER2303
