function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("H");
  console.log("A");
  console.log("N");
}

// sayMyName();

// ADD TWO NUMBERS

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumber(5, 4); // passed values are arguments
// result inside function and here both are different becuase of scope.

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  // default username is pass , so it will never be undefined

  // if(username === undefined){
  //     console.log("please enter a username")
  //     return
  // }

  // in JS , empty String "" , undefined ko false maan liya jata hai
  // !username when username is underfined will give true

  if (!username) {
    console.log("Please enter user name ");
    return;
  }

  return `${username} just logged in`;
}

console.log(loginUserMessage("Mohan"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); // it will print undefined , for interview

// uses in shopping cart , when user add cart , and we dint know how many they will add
// we have to calculate the price of cart

function calculatecardPrice(val1, val2, ...num) {
  return num;
}

console.log(calculatecardPrice(100, 200, 300, 500, 503));

// (...num) is rest operator , and it gives an array of all elements
// rest and spread operator are same but there use case are different

// now how to pass object as parameter in function

const user = {
  name: "Mohan",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.name} and its price is ${anyObject.price}`
  );
}

handleObject(user);

// special thing is you have to check the price and user , does it actually exist or not , by if else

// you can also pass  object direct as argument

handleObject({
  name: "mohan",
  price: 299,
});

// now how to pass array as an argument of function

const myNewArray = [200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray))

// another way to array directly without creating first
console.log(returnSecondValue([200,400,500]))
