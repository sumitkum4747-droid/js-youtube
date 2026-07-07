const score = 400 
console. log(score) 

const balance = new Number(100) 
console. log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))  // Output : It specify the no. of the decimal places

const otherNummber = 23.8966
console.log(otherNummber.toPrecision(1)) // Output : 2e+1
console.log(otherNummber.toPrecision(2)) // Output : 24
console.log(otherNummber.toPrecision(3)) // Output : 23.9
console.log(otherNummber.toPrecision(4)) // Output : 23.90

const newNumber = 223.8966
console.log(newNumber.toPrecision(2))  // Output : 2.2e+2
console.log(newNumber.toPrecision(3))  // Output : 224
console.log(newNumber.toPrecision(4))  // Output : 223.9

const netWorth = 100000000
console.log(netWorth.toLocaleString())
console.log(netWorth.toExponential())
console.log(netWorth.toLocaleString())
console.log(netWorth.valueOf())


console.log(Math)
console.log(Math.abs(-4))  // Output : It changes the negative value to positive and 
// positive number remains same uneffected

console.log(Math.round(4.3))  // Output : 4
console.log(Math.ceil(4.3))   // Output : 5
console.log(Math.floor(4.8))  // output : 4


console.log(Math.min(2,4,9,8,55))  // Output : 2
console.log(Math.max(2,4,9,8,55))  // Output : 55

console.log(Math.random())  // Output : Always come value between 0 to 1
console.log((Math.random()*10) + 1) // Output : Always number come between 1 to 11.

// code for the random number generation between min and max given below
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // "((max - min +1) + min)" is formula learn it for generating numbers between 2 no.s
