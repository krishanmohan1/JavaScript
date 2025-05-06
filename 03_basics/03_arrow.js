

const user = {
    username : "mohan",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this)
    }
}
// this context ko batata , like jis context or scope me likha hoga ye uski baat karega 
// yahi ander me this ko print karayenge to , poora context print ho jayega .



// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  
//  ye output {}  , empty object kareaga kyu ki 
// yaha javascript node environment me run ho rha hai essiliye , eska global ka context  empty  hai
// agar browser ke console me this print karenge to window print hoga , kyu ki pahle browser me run hota tha , 
// essi liye DOM me window ke methods , events use kar paate hain 


// function chai(){
//     let username = "mohan"
//     console.log(this.username); // this will print undefined
// }
// chai()


// const chai = function(){
//     let username = "mohan"
//     console.log(this.username);
    
// }



const chai = () => {    // this is called arrow function
    let username = "mohan"
    console.log(this);      // yaha this ko print karne pe empty {} object milta hai

}
// chai()


()=>{}  // this is arrow function , you can store it in a variable

// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }

// when you use return keyword it is explicitly return


// you can write 'implicit return'
// const addTwo = (num1 , num2) => num1 + num2


// const addTwo = (num1 , num2) => (num1 + num2)
// when you use {} curly braces , you have to use return , and when you () you donot need to use return keyword
// this thing comes in use in REACTJS so much



// Now when you have to return objects instead of these numbers 

// const  addTwo = (num1 , num2) => {username : "mohan"}   // this way give undefined 
const  addTwo = (num1 , num2) => ({username : "mohan"})
// you have to wrap the object in paranthesis.
 



console.log(addTwo(3,4));










