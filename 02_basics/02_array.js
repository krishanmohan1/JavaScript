const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros); // concat return a new array of all element
// console.log(allHeros);


// Spread Operatos , has more uses 

const all_new_heros = [...marvel_heros, ...dc_heros]    // here we can operated over more than two
console.log(all_new_heros);

// falat()

const another_array = [1,2,3,4,[5,6,7],[1,2,[3,4,5,6]]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);

console.log(Array.isArray("Mohan"));
let a = [1,2,2,3]
console.log(Array.isArray(a));
console.log(Array.from("Mohan"));
console.log(Array.from({name : "Mohan"}));  // interesting , you have to mention on which like key or value you have to make array, otherwise give empty array []

let score1 = 100
let score2 = 200
let score3 = 301

console.log(Array.of(score1,score2,score3));






