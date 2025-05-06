const accountId = 1;
let accountEmail = "mohan@googgle.com";
var accountPassword = "122093911";
accountCity = "Begusarai";      // bad practice 
accountEmail = "baba@ggogle.com";
accountCity = "Jalandhar";
let accountSession

// accountId = 0002;

/*
Prefer not to use var 
because of issue in block 
scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountSession]);
