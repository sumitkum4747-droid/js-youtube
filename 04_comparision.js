// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)  // Output : true
console.log("02" > 1) // Output : true

console.log(null > 0)   // Output : false
console.log(null == 0)  // Output : false
console.log(null >= 0)  // Output : true

/* The reason is that equality check == and comparisions >,<,>=,<= work differently.
Comparision convert null to a number, testing it as 0.
That's why (null >= 0) is true and (null > 0) is false.  */


console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
/* All the output of all the three comparison will come false because undefined is not
converted into number. */

// strict checking " === "
console.log("2" === 2)  // Output : false  
/* Here in strict checking data type is also checked and no conversion happen like 
happens in this code- [ console.log("2" == 2) ] */

