const myObject = {
    js: "JavaScipt",
    py: "Python",
    cpp: "C++",
    shift: "shift by apple",
}

for (const key in myObject) {
    // console.log(key); // js py cpp shift
    console.log(`${key} is shortform of ${myObject[key]}`); // js is shortform of JavaScipt
    
}

console.log("---Array-----");

const programminglang = ["js","py","cpp"]

for (const key in programminglang) {
    // console.log(key); // in for in with array we get array index while passing key
    // 0 1 2 
    console.log(programminglang[key]); // js py cpp
    
}