

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log("Async1 task is complete");
        resolve();
        
    },2000)
});

promiseOne.then(function(){ 
    console.log('PromiseOne is Consumed');
    
})

// .then() me promise consume hone ke baad aata hai , uske resolve() dena jaruri hai 
// .then() ek function leta hai aur , promise() bhi ek function leta hai jiska do parameter hota hai , ek resolve aur ek reject



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async2 is complete')
        resolve()
    },5000)
}).then(function(){
    console.log('promise2 two is consumed properly');
})



// jo promise me reolve hoke data pass karenge wo jake then me uska result milega so , 
// usko aise print kar sakte hai

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email:"chia@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);  
})



const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Mohan", pass: "123"})

        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)    
})


// esko chaining kehte hai 

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('The Promise is Either Resolved or Rejected');
})




// ye ek alag tarika hai esme , async aur await , sath try catch ka bhi use hua hai 

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
    let error = false ;
    if(!error){
        resolve({username : "javascript", password : "123"})
    }else{
        reject('ERROR : JS went wrong')
    }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive      // resolve ke baad yaha aaya hai 
        console.log(response);
        
    } catch (error) {
        console.log(error);       
    }
}

consumePromiseFive()




// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  // ye bhi tarika hai response ko json me parse karne ka 
//         console.log(data);
        
//     } catch (error) {
//         console.log('E: ', error);
        
//     }
// }

// getAllUsers()



fetch('https://api.github.com/users/krishanmohan1')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error)
)



