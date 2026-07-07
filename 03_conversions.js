// ***************** Operations *********************//
let value = 3
let negvalue = -value
console.log(negvalue)

// Basic mathematic OperTions
// console.log(2+2)   Addition
// console.log(2-2)   Subtraction
// console.log(2*2)   Multiplication
// console.log(2**2)  Power
// console.log(2/2)   Divide
// console.log(2%2)   Modulus

let str1 = "Hello"
let str2 = "Sumit"
let str3 = str1 + " " + str2
console.log(str3)  // Output : Hello Sumit

console.log("1" + 2)     // Output  : 12
console.log(1 + "2")     // Output  : 12
console.log("1" + "2")   // Output  : 12
console.log("1" + 2 + 2) // Output  : 122
console.log(1 + 2 + "2") // Output  : 32

console.log(3 + 4 * 6 % 3) // Priority : (*) > (%) > (+)
// This type of code should not be written it is so messy [Use perenthesis() to make it readable]

console.log(+true)  // Output  : 1
console.log(+"")    // Output  : 0 
/* Above 0 and 1 came because when you put + before true it consider as increment and 
changed true from boolean to Number type for increment process but no value is given to 
increase there so it(js) printed original value.
-> And "" empty space convert to 0 in Number type.
-> But you should not do this type of conversions it pretended to be bad in Industry */


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++  //suffix increment
console.log(gameCounter)  // Output : 101
++gameCounter  //prefix increment

console.log(gameCounter)  // Outout : 102

// Some Examples to Understand
let x = 3;
const y = x++;  // Here value of x assigned to y then x got increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  // Here a got increment first and then increased value assigned to b

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
