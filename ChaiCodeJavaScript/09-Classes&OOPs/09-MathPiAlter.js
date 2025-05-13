// Can we alter "Math.PI" Value 3.14242524?
// To any value as we want Interview Que

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false, // means we can't alter for now as false
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name: 'ginger',
    price: 250,
    isAvailable: true,
    orderChai : function(){
        console.log("CODE Fat Gaya");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); // Error -> undefined
// coz this function needs property name

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

/*
{
    value: 'ginger',
    writable: true, // yes change able user define object
    enumerable: true,
    configurable: true
    }
    */
   
   Object.defineProperty(chai, "name", {
       writable: true,
       enumerable: false,
    })

    console.log(Object.getOwnPropertyDescriptor(chai,'name'));

    // for (let [key, value] of chai) {
    //     console.log(`${key} : ${value}`);
    // }
    // // TypeError: chai is not iterable 
    for (let [key, value] of Object.entries(chai)) {
       
        if(typeof value != "function"){ // if this not error will there 
                console.log(`${key} : ${value}`);
        }
     
        }
    /*
    price : 250
    isA vailable : true
    orderChai : function(){
        console.log("CODE Fat Gaya");
    }
    */