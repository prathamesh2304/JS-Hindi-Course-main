const programminglang = ["js","py","cpp"]

programminglang.forEach( function (key) {
    // console.log(key); // js py cpp
    
})

console.log("---ArrowFunction---");

programminglang.forEach( (key) => {
    // console.log(key); // js py cpp
    // this will same as above 
})

function printMe(item) {
    console.log(item);
    
}

// programminglang.forEach(printMe) // this will work as same

programminglang.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    // js 0 [ 'js', 'py', 'cpp' ]
    // py 1 [ 'js', 'py', 'cpp' ]
    // cpp 2 [ 'js', 'py', 'cpp' ]
})

const coding = [
    {
    langaugeName: "Java",
    langaugeFile: "js"
    },
    {
    langaugeName: "Python",
    langaugeFile: "py"
    },
    {
    langaugeName: "C++",
    langaugeFile: "Cpp"
    } ]

coding.forEach( (item) => {
    console.log(item.langaugeName);
    // Java Python C++
    
})