function createUsername(username){
    this.username = username
    console.log("Called");
}

function createUser(username,email,id){
    createUsername.call(this,username) // important
    this.email = email;
    this.id = id;
}

const user1 = new createUser("Prathamesh","pt@gmail.com",123) 
console.log(user1); // { username: 'Prathamesh', email: 'pt@gmail.com', id: 123 }
