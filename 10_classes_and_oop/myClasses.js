// class User{
//     constructor(username , email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return ` ${this.username}`
//     }

// }

// const chai = new User('chai', 'chai@gmail.com', '123')
// console.log(chai);

// Behind the scene

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUsername = function () {
  return ` ${this.username.toLowerCase()}`;
};

const tea = new user("Mohan", "tea@gmail.com", "321");
console.log(tea);

console.log(tea.changeUsername());
console.log(tea.encryptPassword());
