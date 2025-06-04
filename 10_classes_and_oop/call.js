

function SetUsername(username){
    // Complex DB calls
    this.username = username;
    console.log('Called');
    
}

function createUser(username, email, password){
    SetUsername.call(this,username);
    // this.username = username;
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai',"chai@fb.com", '123')
console.log(chai);



// call(this,...) ye apne current execution context dushre function ko de deta hai .


/*

In JavaScript, "call" refers to a method that allows you to invoke a function with a specified this value and arguments. It's a way to explicitly set the context within which a function executes.
Here's a breakdown:
Purpose:
The primary use of call() is to control the value of this inside a function. Normally, this refers to the object that called the function, but call() lets you override that.
Syntax:
functionName.call(thisArg, arg1, arg2, ...)
functionName: The function you want to call.
thisArg: The value that will be used as this inside the function.
arg1, arg2, ...: Optional arguments to be passed to the function.
How it works:
call() immediately executes the function you call it on. The thisArg becomes the context for the function, and any additional arguments are passed to the function as parameters.
Key Use Cases:
Borrowing methods:
You can use call() to apply a method from one object to another object. This is useful for code reuse.
Setting context:
When dealing with callbacks or functions that need a specific this value, call() allows you to control that context.
Function invocation:
call() is a way to invoke a function immediately.
Call Stack:
When a function is called, it is added to a call stack. When the function is finished, it is removed from the call stack. 
Example:
JavaScript

function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

let person = { name: "John" };

greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.
In this example, greet.call(person, "Alice") sets the this value inside the greet function to the person object and passes "Alice" as an argument.
Difference between call and apply:
Both call() and apply() achieve the same goal of setting the this value and executing a function. The difference lies in how they handle arguments:
call() takes arguments individually, separated by commas.
apply() takes arguments as an array.

*/