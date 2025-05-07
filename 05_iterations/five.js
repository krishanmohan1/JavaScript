// for each loop
const coding = ["js", "java","php","python"];

// coding.forEach()
// forEach function ek callback function jiska koi naam nhi hota hai 

// coding.forEach(function (item){
//     console.log(item);
// })


// Function can be written as arrow function also so 
coding.forEach( (val)=>{
    console.log(val);
})

// arrow function also can be writtten this way

coding.forEach( e => {
    console.log(e);  
})
// jab ek he parameter hoo to paranthesis ki jarurat nhi padta hai 
// es time parameter ka naam 'e' hai 

//  yaha val aur item parameter hai jo ki dikhata hai loop array ke upper iterate karega to usko value essi parameter ke upper bhejega 

// callback function me as a parameter value ke sath , index , aur poora array bhi aata hai 

coding.forEach( (e , i , arr)=>{
    console.log(e,i,arr);
})



// [{},{},{}]  array ke ander object aate hai 
// like jab data base se value fecth karte hai to array of object aate hai , so for each loop ka use hota hai jiise es complex chiij pe easily iterate kar sakte hain 

const arr = [

    {
        languageName : "Java",
        languageFileName: "java"
    },

    {
        languageName : "javaacript",
        languageFileName: "js"
    },

    {
        languageName : "php",
        languageFileName: "php"
    },

]

arr.forEach( (item)=>{
    console.log(item.languageName);
    // console.log(item.languageFileName);
})

// this way hum object pe iterate karke uski value print kara sakte hai



