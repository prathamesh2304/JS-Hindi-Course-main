 const myNum = [1, 2, 3]

console.log(`------HowReduceWorks----------`);

                                                //   1st(0)       (1)
const myManipulatedNum = myNum.reduce( function (accumulator,currrentValue) {
    console.log(`AccumulatorValue ${accumulator} & CurrentValue ${currrentValue}`);
    
    return accumulator + currrentValue
},0)

console.log(myManipulatedNum); // 6

console.log(`------Simplified----------`);
//  const myManipulatedNum = myNum.reduce( (accumulator,currrentValue) => accumulator+currrentValue,0)
console.log(myManipulatedNum); // 6

console.log(`------ShoppingCard Ex----------`);

const shoppingCart = [
    {
        item: "Pant",
        price: 700
    },
    {
        item: "Shirt",
        price: 500
    },
    {
        item: "Jeans",
        price: 800
    },
]

const totalPrice = shoppingCart.reduce( (accumulator,item) => accumulator+item.price,0 )
console.log(totalPrice); // 2000


 