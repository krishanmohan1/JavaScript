// Anything to Number

// let score = "33";    //33
// let score = "33abc";  // => NaN
// let score = null;   // => 0
// let score = "undefined"; // => NaN
// let score = true    // => 1
let score = "Mohan"; // => NaN

// console.log(score);
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// anything to boolean
// let isLoggedIn = 1; // => True
// let isLoggedIn = "";   // => false
// let isLoggedIn = "hello123"; // => true
// let isLoggedIn = undefined;  //=> false
let isLoggedIn = null; //=> false

// let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanisLoggedIn);
// console.log( booleanisLoggedIn)

// Anything to String

// let someNumber = 33;
let someNumber = undefined;
// let someNumber = 33; 
// let stringSomeNumber = String(someNumber);
// console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);

// true => true
// null => null
// undefined => undefined



// ***************************** Operations  *****************************

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "Krishan"
let str2 = " Mohan"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);   // => 123
console.log(1 + 2 + "3");  // =>33

console.log((3 + 4) * 5 % 3);


console.log(+true);
console.log(+"");









