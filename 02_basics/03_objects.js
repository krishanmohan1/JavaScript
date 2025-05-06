// Singleton ----> objects created through constructor 
// Object.create



const mySym = Symbol("key1")    // this is how a symbol datatype is define .


// object literals 
const JsUser = {
    name : "Mohan",
    "full name" : "Krishan Mohan",
    [mySym] : "mykey1",     // symbol ko keys ke tarah act kara ke print karna hai 
    mySym : "mykey1",       // here is normal key as a string  (mySym)
    age : 18,
    location : "begusarai",
    email : "mohan@google.com",
    isLoggedIn : false,
    lastLoggedinDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);


JsUser.email = "mohan@chatgpt.com"

// to freeze a object so that no one can make change in it

// Object.freeze(JsUser)        // this is how , you freeze a objcet to avoid make change in it 
JsUser.email = "mohan@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());   // it will give Function Anonymous
console.log(JsUser.greetingTwo());







