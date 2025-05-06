// # primitive

// 7 types : String , Number , Boolean , null , undefined , symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);   // it gives false 

const bigNumber = 366852741852963n;
// console.log(typeof bigNumber);

// Reference (Non primitive)

// Array , Objects, Function

const arr = ["mohan", "krishan", "herobaba"];
const myObj = {
  name: "krishan",
  age: 23,
};
const myFunction = function () {
  // console.log("hello");
};

// console.log(typeof outSideTemp );  // onject
// console.log(typeof myFunction );  // function object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive Type)(pass by Copy) , Heap (Non- Primitive) (Pass by reference )

let myYoutubename = "MeditateWithMohan";
let anothername = myYoutubename;
anothername = "MohanBaba";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
  name: " Mohan",
  age: 23,
  email: "mohan@amazon.com",
};

let userTwo = userOne;

userTwo.email = "mohan@google.com";

console.log(userOne.email);
console.log(userTwo.email);


