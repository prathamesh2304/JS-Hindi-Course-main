
console.log(`-----Immediately Invoked Funcition Expression-----`);

console.log("****Type 1 NAMED IIFE****");

(function chai(){ 
    console.log("DB Conncected");
})();                               // WHILE WRITING 2 IIFE IN ONE CODE ";" MUST TO PREV IIFE 
    
console.log("****Type 2 SIMPLE IIFE****");

( () => {
    console.log("DB CONNECTED 3");
})()