const User = {
    _email: 'h@hc.com',
    _password : 'abc ',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User);    // factory function ko use karke banate hai 
console.log(tea.email);


// Array behind the scene , getter and setter ko he use karta hai jisse wo length property deta hai
