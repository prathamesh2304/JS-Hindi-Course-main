// Singleton
// Object Literals(Object Declaration)

// const MySym = symbol("key1")
const JsUser = {
    name: "Prathamesh",
    "Full Name" : "Prathamesh Thakur",
    age: 21,
    location: "Chh Sambhajinagar",
    email : "PrathameshGooglegmail.com",
    isLoggedIn: false,
    lastLogIn: [ "Mon","Sat"],
    // [MySym] : "MyKey1"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);// prefered way of accessing object items
// console.log(JsUser["Full Name"]);// In Such cases we have to use this type of accesing

JsUser.name = "Aniket"// to change value
// console.log(JsUser.name);

// Object.freeze(JsUser)// afterwards this we unable to chage any value

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
// console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); 

JsUser.greetingTwo = function(){
    console.log('Hello JsUser', ${this.name});
}