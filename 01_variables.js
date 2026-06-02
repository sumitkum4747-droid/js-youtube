const accountId = 144553
let accountEmail = "sumit@gmail.com"
var accountPassword = "12345"
accountCity = "Bokaro"
let accountState


// accountId = 2 //  not allowed it's a constant
accountEmail = "sumitthelegend@gmail.com"
accountPassword = "54321"
accountCity = "Jhajha"

console.log(accountId);

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

/* Prefer not to use "var",
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// thr last accountState will be printed as Undefined