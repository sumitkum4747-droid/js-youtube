const name = "Sumit"
const repocount = 50

console.log(name + repocount + " Value") 
// Old way to write the strings

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
// New way to write multiple strings with variable value

const gameName = new String('Sumityadav')
console.log(gameName[0]) // Output : S

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString) // Output : Sumi

const anotherString = gameName.slice(-10,4)
console.log(anotherString) // Output : Sumi

// Triming 
const newStringOne = "   Sumit   "
console.log(newStringOne)  // Printing without trimming
console.log(newStringOne.trim())  // trimming


const url = "https://google.com/google%20sumit"
console.log(url.replace('%20','-'))  // Output : "https://google.com/google-sumit"

console.log(url.includes('sumit'))  // Output : true (bcz sumit keyword is there in url)
console.log(url.includes('hitesh')) // Output : false (hitesh keyword id not there in url)

// Splitting the strings in arrays basis of separator
const newGameName = "warriers-of-the-milky-way-galaxy"
console.log(newGameName.split('-'))  // here we split on the basis of "-" used as separator

