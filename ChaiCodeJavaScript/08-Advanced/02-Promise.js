// A Promise is an object


const promiseOne = new Promise(function(resolve,reject){
    // resolve -> ik toh promise complete hoga 
    // reject -> ya toh nahi hoga
    // Do an asyn task
    // DB Calls, cyptography, network
        setTimeout(function(){
            console.log("-----PromiseOne-----");
            console.log("A Asysn Task Completed");
            resolve();
        },1000)
})

promiseOne.then(function(){                 // Promise consumption
    console.log("Promise Consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("-----Promise2-----");
        console.log("Asysn Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Task 2 Resolved")
})


const promiseThree = new Promise(function(resolve,reject){
    console.log("-----PromiseThree-----");
    resolve({username:"Chai",id: "prathamesh@gmail.com"})
})

promiseThree.then(function(user){
    console.log(user) // { username: 'Chai', id: 'prathamesh@gmail.com' } 
    console.log(user.id) // prathamesh@gmail.com
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        console.log("-----PromiseFour-----");
        if(!error){
            resolve({username:"Pratham", password: "123"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
     return user.username
}).then((username)=>{ // .then chaining 1st .then's output is 2ns one's input
        console.log(username);
}).catch(function(error){ // catch is related to reject 
    console.log(error)
}).finally(()=>console.log("Finally is worked")) // finally is kind of default situaltion


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true // 
        console.log("-----PromiseFive-----");
        if(!error){
            resolve({username:"Aniket", password: "766"})
        }
        else{
            reject("ERROR : JS went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
 try {
    const response = await promiseFive
    console.log(response)
 } catch (error) {
    console.log(error);
    
 }
}
consumePromiseFive()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function getAllUser() {
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response) 
//     const data = await response.json()   
//     console.log(data);
    
// } catch (error) {
//     console.log("E: ",error)
// }
// }

// getAllUser()

// ||||||||||||||||||||||Below Code Does Same Thing as above||||||||||||||||||||||
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))