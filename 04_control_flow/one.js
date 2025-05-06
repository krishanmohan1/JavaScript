// const isUserloggedIn = true
// const temperature = 41



// if(temperature === 50){
//     console.log("Less than 50");
// }else{
//     console.log("temperature is greature then 50")

// }

// <, > , <= , >= , == , != , === , !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);   // out of scope

const balance = 1000;

// if(balance > 500) console.log("test"), console.log("not good practice");
// this way you can write multipline of code without using scopr , but it is not good practice

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 900){
//     console.log("less than 100")
// } else{
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
