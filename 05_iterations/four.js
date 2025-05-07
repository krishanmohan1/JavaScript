const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
//    console.log(key);    // it will print key value only 
//    console.log(myObject[key]);  // it will print value of key only

console.log(`${key} shortcut for ${myObject[key]}`);   
}

// this is how we perform for in loop on objects

// let try to perform for in loop on array 

const programming = ['js', 'rb', 'py','java','cpp'];

for (const key in programming) {
    // console.log(key);   // it will print only key value of array which is its index starts with 0 and always in number 
    console.log(`${key} has value ${programming[key]}`); 
}

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United State of America')
map.set('Fr','France')


for (const key in map) {
    console.log(key);   
}

// it will not give error or anything when we run the code , because map is  not iterable so .


