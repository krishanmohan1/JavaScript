let mydate = new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(typeof mydate);

// let myCreatedDate = new Date(2024, 0,27)
// let myCreatedDate = new Date(2026,9,27,9,3,6)
// let myCreatedDate = new Date("2025-10-27")
let myCreatedDate = new Date("12-04-2025")
// console.log(myCreatedDate.toLocaleString()); 


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // it convert millisecond to second





let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());    // t gives month starts with 0 as jan
console.log(newDate.getDay());  // IT GIVE DAYS OF WEEK STARTS WITH 0 AS SUNDAY
console.log(newDate.getFullYear());
console.log(newDate.getTime());


console.log(`${newDate.getDate()} and the time  is ${newDate.getTime().toLocaleString()}`);




 