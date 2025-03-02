function sayMyName (){
    console.log("Hitesh");
    console.log("Prathamesh");
}

sayMyName()

function addTwoNumber(number1,number2){
    
    console.log("Addition is",number1+number2) 

}

addTwoNumber(3,4)

function addTwoNumber2(number1,number2){
    
    let result = number1+number2;
    return result 
    
}

const result = addTwoNumber2(3,5)
console.log("Addition is",result);

function loginUserMessage(username){
    if(username === undefined){  // if(!username)
        console.log("Please Enter Valid Username");   
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Prathamesh"));
