

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);     // ye dot (.) ka use to object me karte hai aur ye function hai so fuction bhi object ke trah kaam kar sakta hai 

console.log(multiplyBy5.prototype);     // yaha dekho {} aayega 

// Function has both behaviour functional and object ,thats why it has prototype
//
// 
// In JavaScript, a prototype is a mechanism that enables
//  objects to inherit properties and methods from other 
// objects. Each object has a prototype, which forms a 
// prototype chain. When an object is created, it inherits
//  properties and methods from its prototype, 
// and this chain continues until a prototype with null is 
// reached. 


/*
Here are some key points about prototypes in JavaScript:
Every object has a prototype, which is a reference to another object.
The prototype chain is a sequence of objects linked together by their prototypes.
Prototypes are used to implement inheritance in JavaScript.
The prototype property of a function is used to set the prototype of the objects created by that function.
Prototypes allow you to add new methods to existing objects.
*/

function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;       // jab object ka instance banega aur esko . se use karega to jo use karega uska increase hoga 

}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser('chai',25)      // ye createUser Object jo ki ek function hai uska ek instance ban gya hai , new keyword use karke , aur createUser() constructor function hai
const tea = new createUser('tea', 250)

chai.printMe();
tea.printMe()
chai.increment()
chai.printMe()
console.log(chai.constructor);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/








