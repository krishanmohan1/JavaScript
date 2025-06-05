class User{
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    // make method static to stop its access to its instances

    static createid(){
        return `123`

    }
}

const hitesh = new User('Hitesh')
hitesh.logMe()
// console.log(hitesh.createid());     // it gives error becacuse static makes no access to createId() function


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher('iphone','i@phone.com')
iphone.logMe()
// console.log(iphone.createid());




