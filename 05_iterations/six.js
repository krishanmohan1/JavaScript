// const coding = ["js", "java","php","python"];

// agar hume es array se wo value print ya uspe operation nhi karna  hai usko return karna hai
// to kya karenge , for each loop lagayenge chaliye dekhte hain

// const value = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })

// console.log(value); // this will give undefined value

// forEach loop will not return value of array

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (item)=>(item > 4))
// const newNum = myNum.filter( (item)=>{
//     return item > 4
// })
// console.log(newNum);

// arrow function me implict and explicit return hota hai ,
// jab arrow function me condtion {} me likhte hai to scope create ho jata hai , so that khud se return karna hota hai
// jab () , open likhte hai to implicitly return ho jata hai

// agar yahi chij hume for each ko use karke karna hoga to

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = [];

myNum.forEach((item) => {
  if (item > 4) {
    newNum.push(item);
  }
});

console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBook = books.filter( (bk)=>{
    return bk.genre === 'History' 
  })

  userBook = books.filter( (bk)=>{
    return bk.edition >= 1995
  })

  userBook = books.filter( (bk)=>{
    return bk.genre === "History" && bk.publish >= 1995
  })

  console.log(userBook);
  
