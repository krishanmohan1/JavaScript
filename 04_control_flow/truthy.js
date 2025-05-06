const userEmail = []

if(userEmail){
    console.log('Got user email')
}else{
    console.log("Don't have user email value ")
}


// falsy Value
// false , 0, -0 , BigInt 0n , "" , '' , null , undefined

// truthy value 
//  [], "0", 'false', {}, function(){}

if(userEmail.length === 0){
    console.log("Arrays is empty")
}else{
    console.log('array is not empty');
    
}


// how to check an object is empty or not  

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");    
}

// Object.keys(obj)  --> it returns array


// Nullish Coalesing Opertor (??): null undefined

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 16
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("More than 80")

