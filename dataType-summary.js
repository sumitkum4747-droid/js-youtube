// Primitive 
// 7-Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
const bigNumber = 73896398166839163n

// Reference or NON-Primitive
// Array, Objects, Functions

const heros =["IronMan","Thor","Shaktiman"]

// Object

let myObj ={
    name :"Sumit",
    age :19,
}

// Function

const myFunction = function(){
    console.log("Hello World")
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack {Primitive}  ,  Heap {Non-Primitive}

let myYoutubename = "EveryThingWithGod"

let anothername = myYoutubename
anothername = "sacrificeGaming"

/* here if we change the value of "anothername" variable then value of "myYoutubename" will
not change because another name got the copy of value of "myYoutubename" variable */

// Now
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "sumit@google.com"

/* Here when I change the value of email in userTwo the value of email in userOne will
also change because both have same reference */
 