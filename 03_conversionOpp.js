// Converstion Operation
let score = 33

console.log(typeof score)
// now we will perform some activity to understand dataType

score = "33"
console.log(typeof score)
// Now it(score) will change to string

//Now we are going to change the DataType of the score variable
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
// Here the DataType of the variable-(valueInNumber) is changed from string to numbre 
// But here you have to notice one thing that N is capital while using "Number" datatype

// Now we are going to do something intresting 
score="33abc"
valueInNumber = Number(score)
console.log(typeof valueInNumber)
/* Here score is changed from string to number type but how in string there is (33abc) 
which can't be changed to number this dought will get clear by printing (valueInNumber) */
console.log(valueInNumber) 
// Answer will come NaN(Not a Number)

// Some more intresting things to know
let temp = null
let valuetemp = Number(temp)
console.log(valuetemp)
// It will print 0, because at time of conversion of null to number script consider it 0
// And if you same work with undefined in the place of null then out will come NaN not 0.
// And one more case for boolean value
temp = true
valuetemp = Number(temp)
console.log(valuetemp)
// It will convert true in number and make it 1 and for false it will be 0.

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)
// Answer is True for 1 and False for 0

isLoggedIn = ""
booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)
// Answer in false for empty("") and True for some string("Sumit")