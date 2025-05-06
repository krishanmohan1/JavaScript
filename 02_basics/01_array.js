// Array

const myArr = [1, 2, 3, 4];
const myHero = ["shaktiman", "naargraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// Array Methods 

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(6)    // used in to do list , this add element at first position and shift all right by 1 position
myArr.unshift(7)

myArr.shift()       // it removes first element from array .

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // it make string of elements of array
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr);
















