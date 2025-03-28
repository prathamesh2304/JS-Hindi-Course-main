function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5.power);
console.log(multiplyBy5(5));
console.log(multiplyBy5.prototype); //" {} " function is is tarike ke object hai

// "prototype" not giving up wala character hai voh kuch nah kuch doodhke dega hi until voh null tak nahi jata
/*
function  ---->
array     ----> Object ----> null (leads to null)
string    ---->
*/

function createUser(username,price){
/*variable-->*/ this.username = username
                this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`The Price is ${this.price}`);
    
}
// interpreter ko samz nahi aa rha kisi price ko increment karna hai
// const chai = createUser("chai",25)
// const tea = createUser("tea",250)
const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe() // The Price is 25