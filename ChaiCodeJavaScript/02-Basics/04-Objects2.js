// const TinderUser = new Object() // singleton object 
const TinderUser = {} // Non Singleton object

TinderUser.id = "123abc"
TinderUser.email = "samplegmail.com"
TinderUser.isLoggedIn = false

// console.log(TinderUser); // { id: '123abc', email: 'samplegmail.com', isLoggedIn: false }

const RegularObj = {
    email : "sample2gmail.com",
    name : "PT",
     Username : {
        fullname:{
            firstname: "Prathamesh",
            lastname: "Thakur"
        }
     }
}
// console.log(RegularObj.Username.fullname.firstname); // Prathamesh

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}

// const obj3 = Object.assign({}, obj1,obj2) // not prefred // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2} // Prefered
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj3); 

    const user = [
    {
        id:1,
        email:"usergmail.com",
    }
    ]
  
// user[1].email // accessing the data came from database

// console.log(TinderUser);
// console.log(Object.keys(TinderUser)); // [ 'id', 'email', 'isLoggedIn' ]
// console.log(Object.values(TinderUser)); // [ '123abc', 'samplegmail.com', false ]
// console.log(Object.entries(TinderUser));
//   [
//  [ 'id', '123abc' ],
//  [ 'email', 'samplegmail.com' ],
//  [ 'isLoggedIn', false ]
//   ]
// console.log(TinderUser.hasOwnProperty('isLoggedIn')); // true