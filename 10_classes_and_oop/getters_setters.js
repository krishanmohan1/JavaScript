class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();

    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(Value){
        this._password = Value;
    }
}

// agar getter and setter aur constructor me dono jagah varible ka name same rha to race condition aajayega , like same varibale ko setter aur constructor bhi set karega , aur error aayega 
// agar getter bana rahe ho to setter bhi banana hoga .
// getter aur setter aur constructor functin teeno jagah varible ka name same hona chahiye

const hitesh = new User('hitesh@ai','sdfgh')
console.log(hitesh.password);

console.log(hitesh.email);

