// for of
console.log("---Numbers----"); // 1 2 3 4 5

const arr = [ 1,2,3,4,5 ]

for (const num of arr) {
    console.log(num); // 1 2 3 4 5
    // we dont need to specify any other attributes 
}

console.log("---String----"); // 1 2 3 4 5

const myName = "THAKUR" 

for (const alphabet of myName) {
    console.log(alphabet); // T H A K U R
        
}

console.log("---Map---"); // 1 2 3 4 5

// Map Data Type Similar As Array

const map = new Map()

map.set('IN','India')
map.set('USA','United State')

for (const [key,value] of map) {
    console.log(`${key} is shortform of ${value}`);
    
}