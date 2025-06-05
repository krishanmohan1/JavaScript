const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor)

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// Object ki descriptor property hotii hai yaha uske bare me diya hua hai 

/*

it give this value 
{
  value: 3.141592653589793,
  writable: false,      // this is the reason you can change or overwrite it 
  enumerable: false,
  configurable: false
}

// Do gpt about writable , enumrable , configrable 
*/


// you can you factory function to create objcet , like below 

// const mtnewObject = Object.create(null);    // by default its value is null


const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log(`chai nhi bani , like code fat jayega iterate karne se , es tarah se value nhi chahiye hota hai`);
        // essi liye iterate karne ke time check lagana hota hai 

        
    }

}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// aab hum ye object khud banaye hai to eske property ko ka descriptor khud se change kar sakte hai just like below 

Object.defineProperty(chai , 'name',{
    writable: false,
    enumerable : false      // it makes not iterable this property
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// ye sab karne ke baaad ye property false hua aur esko change ye overwrite nhi kar sakte hai

for (const [key,value] of Object.entries(chai)) {
    if(value != 'function'){    // es tarah se function ko likh sakte hai 
        console.log(`${key} : ${value}`);
    }
    
}


// agar aap chahte hai ,  ki Object ki koi property iterable na ho to usko aise aap enumrable bana sakte ho , jaise backend ki service me kaam aati hai 


/*

an array. Each element of this array is another array containing two elements: the key and the value of a property from the original object.
Order: The order of the key-value pairs in the returned array is the same as the order in which the properties would be iterated over using a for...in loop. Note that for...in also iterates over properties in the prototype chain, while Object.entries() only returns the object's own properties.
Non-Mutating: The original object remains unchanged after calling Object.entries().
Example:
JavaScript

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const entries = Object.entries(person);
console.log(entries);
// Output:
// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 30]
// ]
Use Cases:
Iteration: When you need to loop through the properties and values of an object.
Conversion: When you need to convert an object into an array for further processing, such as using array methods like map, filter, or reduce.
Data Manipulation: In scenarios where you might need to pair object data with other array methods.
Related Methods:
Object.keys(): Returns an array of the object's keys.
Object.values(): Returns an array of the object's values.
Object.fromEntries(): Creates a new object from an array of key-value pairs.


*/







