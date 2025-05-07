const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// map bhi call back function leta hai aur , implicit and explict return karta hai same as filter bala


const newNum = myNumbers.map( (num)=>{
    return  num + 10
})

console.log(myNumbers);


// chaining --> multiple array method ek sath 
// map and filter -> map array ka har element me change karke return karta hai whhile 
// filter wahi element return karta hai jo ki waha condition satisfy karta hai 
// dono ek new array return karta hai , mutate nhi karta hai real array ko 
// baki google kar lo map vs filter in js 


const newNumber = [1,2,3,4,5,6,7,8,9,10]

const resArray = newNumber
                        .map( (num)=>(num * 10))
                        .map( (num)=>(num + 1))
                        .filter( (num)=>(num > 40))
console.log(resArray);

// chaining me ek map apply karke result value dushre map me pass kar dete hai
 
                        