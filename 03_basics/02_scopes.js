var c = 300;
let a = 250;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  c = 30; // it also works like var

  console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

// child scope can access all properties of parrent scope , but parent scope cant access of child scope

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++ Interesting +++++++++++++++++++

addone(5);  // it will work 
function addone(num) {
  return num + 1;
}


addTwo(5)       // it will error , becuase the declarartion of this function is diffenrt ,there is one topic , hoisting 
const addTwo = function (num) {
  return num + 2;
}



