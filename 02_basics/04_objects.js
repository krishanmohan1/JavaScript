// const tinderUser = new Object();   // singleton object
const tinderUser = {}; // both has no difference from backend

tinderUser.id = "123abc";
tinderUser.name = "Mohan";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "mohan@google.com",
  fullname: {
    userfullname: {
      firstname: "Krishan",
      lastname: "mohan",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname?.firstname); // ? is used when we accept value from api like it check if it exist the do this

// How to merge or combine two objectc just like array

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "1", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

// when you receive objects from database it comes as array of objects .

const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "b@gmail.com",
  },
  {
    id: 1,
    email: "c@gmail.com",
  },
];

// to traverse over it , it is array , you can user map() also  and this way

user[0].email = "yoyo@gmail.com";

// console.log(user)

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // it returns array of keys of object tinderUser
console.log(Object.values(tinderUser));    // it returns array of values  of object tinderUser
console.log(Object.entries(tinderUser));    // it gives all entries of objects in array

// over all you can traverse using loop , it is very come in use .

// to check if a key/property is present in object or not 
// console.log(tinderUser.hasOwnproperty('isLoggedIn')); 





// De-Constructing of Objects 

const course = {
  courseName : "JS in hindi",
  price : 999,
  courseInstructor : "hitesh "
}

// course.courseInstructor
const {courseInstructor} = course;
const {courseInstructor: teacher} = course;
console.log(courseInstructor);
console.log(teacher);



// it is of react
const navbar = ({company})=> {

}

navbar(company = "hitesh")



// API (Application Proggramming Interface)
// earlier its response was in xml 
// now it is in JSON(javascript object notation)

// {
//   "name" : "hites",
//   "coursename" : "js in hindi",
//   "price" : "free",
//   "id" : 45,
//   "usefull" : true
// }

// keys and values both are in string format double quote "",but number and boolena value donot need to be in


// some time response comes as array of object

[
  {},
  {},
  {}
]











