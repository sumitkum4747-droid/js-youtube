// Singleton
// Object.create  <------ This is a constructor method 
//  object literals

const mySym = Symbol("key1");  // defining the Symbol 

const JsUser = {
    name: "Sumit",
    "full_name": "Sumit Yadav",
    [mySym]: "myKey1",  // Using the symbol in the Object writting in [] for symbol is mandotary
    roll: 25155577,
    age: 18,
    location: "Bokaro",
    isLoggedIn: true,
    lastLoggedDays: ["Monday", "Saturday"]
}



console.log(JsUser.roll);  // Output : 25155577  
console.log(JsUser["roll"]);  // Output : 25155577    This is the most correct way to call
console.log(JsUser.full_name);
console.log(JsUser[mySym]);  

JsUser.roll = 25155777   // Changing the value in the Object
// Object.freeze(JsUser);   // It is now freezed from no value in the object can be changed after that
JsUser.roll = 25155577

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS Users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS Users ${this.name}`);  // There is big role of "this" in JS so learn it from internet
}

// console.log(JsUser.greeting);  // Output : [Function (anonymous)]
console.log(JsUser.greeting());
// If you now try to run this then error will come because in above we freeze the the object
// Firstly we have to comment out that freeze code line
console.log(JsUser.greetingTwo());
// In this file the objects are Object literals