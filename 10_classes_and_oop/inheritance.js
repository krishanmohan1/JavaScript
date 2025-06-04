class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log( `The course is add by : ${this.username}`)
    }
}

const chai = new Teacher('chai', 'chai@tecaher.com', '123')
chai.logMe()

const masalaChai = new User('MasalaChai')

masalaChai.logMe();
console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);








