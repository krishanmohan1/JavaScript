// [" "," "," "]

// [{},{},{}]

// for of loop
// array ,string , object all are iterable

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(`numbers are ${num}`);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
//   console.log(`Each char is : ${greet}`);
}



// Maps  it is an object

const map1 = new Map();
map1.set("a", 1);
map1.set("b",2);
map1.set("c",3);

// console.log(map1)
for (const map of map1) {
    // console.log(map);
}


const map = new Map()
map.set('In', 'India')
map.set('USA', 'United State of America')
map.set('Fr','France')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key);   // it will print in key and value pair array of each entry
    console.log(key ,':-' , value);   
}

// the way we iterate on map , we cannot iterate on 

const myObject = {
  game1 : 'NFS',
  game2 : 'Spiderman'
}

for (const [key, value] of myObject) {
  // console.log(`${key} :- ${value} `);
  // for of loop doesnot work on object , but for in loop do 
  // to know how it work go to the four.js
  
  
}

