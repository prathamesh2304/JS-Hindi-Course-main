// let myName = "Prathamesh     "


// console.log(myName.truelenght);

let myHeros = ["Thor","Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Got ${this.spiderman}`);   
    }
}

Object.prototype.prathamesh = function(){
    console.log("Aham Brahmash-mi(Object)");  
}

Array.prototype.heyPrathamesh = function(){
    console.log("Lo Phir Se Aagaya(Array)");
    
}

// myHeros.prathamesh() // Aham Brahmash-mi
// heroPower.prathamesh() // Aham Brahmash-mi
myHeros.heyPrathamesh() // Lo Phir Se Aagaya(Array)
// heroPower.heyPrathamesh() // heroPower.heyPrathamesh is not a function at Object

// +++++++++++++++++++++++++++INHERITANCE+++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeacherSupport = {
    isavailable: false
}

const TASupport = {
    makeAssignement: "JS Assignment",
    fullTime: true,
    __proto__:TeacherSupport // Inheriting Properties of "TeacherSupport"
}


Teacher.__proto__ = user // Inheriting Properties of "user"

// Moder Syntax For Inheritance 

Object.setPrototypeOf(TeacherSupport,Teacher) //  "TeacherSupport" can acces saari properties of "Teacher"

let username = "Prathamesh     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Lenght of above string is (${this.trim().length})`); // True Lenght is 10
    
}

username.trueLength()

let anotherUsername = "Aniket".trueLength()