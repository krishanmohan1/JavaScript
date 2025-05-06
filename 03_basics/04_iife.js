// Immediately Invoked Function Expression (IIFE)

(function chai(){       // this is known is named iife
    console.log(`DB Connected`);
})();

// iife function ye nhi pata hota hai ki es function ko terminate kha karna hai 
// uske liye khud se terminate karna hota hai , like using ';'

// above function ek () me wrap karke uska execution () laga do 

// kai baar global scope ke variable se pollution hoti hai , to us pollution se function 
// pe koi effect na ho , aurr wo immediatley execute ho jaye uske liye 
// IIFE (Immediately Invoed Function Expression) hota hai



(function ram(){
    console.log(`Jai shree ram`);
})();


// ()();   => iife

( () => {
    console.log(`db connected two`);
} )();

((name)=>{
    console.log(`db connected two ${name}`);
    
})("Krishan Mohan");



