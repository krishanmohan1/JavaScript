const myNums = [1, 2, 3];

// const sum = myNums.reduce( function(acc , currvalue) => {
//     return acc + currvalue
// }, 0)

const sum = myNums.reduce((acc, curr) => acc + curr, 1);
console.log(sum);

// this is how you use reduce method , mostly jab sum karna ho cart me to

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "java course",
    price: 4999,
  },
];

// now we have to add the total price of this card , we can use any loop but reduce is best for it

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 1);
console.log(`priceToPay for this three courses is : ${priceToPay} `);
