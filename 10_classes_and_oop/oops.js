const user = {
  username: "Mohan",
  loginCount: 8,
  SignedIn: true,

  getUserDetails: function () {
    // console.log('Got user details from database');
    // console.log(`Username : ${this.username}`);
    console.log(this); // ye bata rha hai current context
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);  // ye yaha par global context hua to yaha , {} aayega

function User(username, loginCount, isLoggedIn) {
    (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);
    return this     // jaruri nhi hai esko likhna 
}
const userOne = new User("Krishan", 12, true);
const userTwo = new User('Mohan',10,false)
// console.log(userOne);
console.log(userOne.constructor);   // constructor khud ko he refernce karta hai 
// console.log(userTwo);


// aur dekhna hai userOne aur userTwo alag alag hai kya to , ek operator hota hai 
// instanceof  ka use hota hai 


// here is the example 


// syntax
// object instanceof constructor


class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog instanceof Dog);   // Output: true
console.log(myDog instanceof Animal); // Output: true (Dog inherits from Animal)
console.log(myDog instanceof Object); // Output: true (All objects inherit from Object)
console.log(myDog instanceof Array);  // Output: false
console.log(myDog.constructor);

