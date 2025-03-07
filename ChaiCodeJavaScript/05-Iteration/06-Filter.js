
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const finalOrdered = myNumbers.filter((num) => num > 4) // call stack
console.log(finalOrdered);
// final output - [ 5, 6, 7, 8, 9, 10 ]

console.log("---Filter2---");


const finalOrdered1 = myNumbers.filter((num) => {
    return num > 4 // corrected

})
console.log(finalOrdered1); // expected output - [ 5, 6, 7, 8, 9, 10 ]
// actual output - []
// this bcoz in call stack we open scope bracket we have to retun value to avoid this

console.log("---Filter3---");

const finalOrdered2 = []

myNumbers.forEach((num) => {
    if (num > 4) {
        finalOrdered2.push(num)
        console.log(num);

    }

})

console.log("---BookExample---");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

  /*Important to change make sure change data type*/
// | 
// *
  let userBook = books.filter((bk) => bk.genre === 'Fiction')
console.log(userBook);
    //    [
    //     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    //     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
    //    ]


console.log("---BookExample2---");
 
    userBook = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre == "History"
})
 console.log(userBook);
//  [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]



