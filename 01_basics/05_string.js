const name = "Krishan Mohan";
const repoCount = 10;

// console.log(name + repoCount + "Value");

console.log(
  ` My name is ${name.toUpperCase()} and no. of repository is ${repoCount}`
);
const gameName = new String("hooney-SIngh-singer-punjabi");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8, 3);
console.log(anotherString);


const newStringOne = "      MOhan     "

console.log(newStringOne);
console.log(newStringOne.trim());  // uese wehn take input from form 


const url = "https://mohan.com/mohan&20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));

const newArrayString = gameName.split('-')  // iit gives array , elements are seperated accroding to seperator '-'
console.log(newArrayString);




