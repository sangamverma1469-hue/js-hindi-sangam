const accountId = 144553
let accountEmail = "sangamverma1469@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sanjayverma34235@gmail.com"
accountPassword = "5344334"
accountCity = "Locknow"

console.log(accountId);
console.log([accountId, accountEmail, accountPassword, accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
