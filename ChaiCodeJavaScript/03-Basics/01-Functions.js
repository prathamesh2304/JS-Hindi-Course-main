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

function calculateCartPrice(...num1){ // rest operator similar as to spread operator differentiated according to use
    
        return num1

    }
console.log(calculateCartPrice(100,200,300)); // [ 100, 200, 300 ]

function calculateCartPrice2(val1,val2,...num1){ // rest operator similar as to spread operator differentiated according to use
    
    return num1

}
console.log(calculateCartPrice2(500,800,400,2000)); // num1 will hold this = [ 400, 2000 ] remainning in val1 and val2

const user = {
    username: "Prathamesh",
    price: 199,
}

    function handleObject(anyObject){
       
        console.log(`Username is ${anyObject.username} Price is ${anyObject.price}`);
        
    }
    // handleObject(user)
    handleObject(
        {
    username:"Aniket",
    price: 899
        }
)

const myNewArray = [100,200,300]

function returnSecondValue(anyArray){
    console.log(anyArray[1]);
    
}

// returnSecondValue(myNewArray)
returnSecondValue([500,6000,800]) // 6000