// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["IronMan","Thor","Doctor Strange"]
const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[0]);
console.log(myHeros[2]);

// Adding value at last 
myArr.push(6)
myArr.push(7)

// Removing the last element from Array
myArr.pop()
myArr.unshift(9)  // Add 9 to start of the Array
myArr.shift()  // Remove the first element of the Array

console.log(myArr.includes(4));  // Give answer in True or False
console.log(myArr.indexOf(4));  // Give index of element(here '4') in the Array

const newArr = myArr.join()  // It copies the string elements of the Array 'myArr' to 'newArr' but in String form 

console.log(myArr);
console.log(newArr);


// Slice and Splice
const SmyArr = [0, 1, 2, 3, 4, 5, 6]

console.log("A ", SmyArr);  // Output : A [0, 1, 2, 3, 4, 5, 6]

const myn1 = SmyArr.slice(1,3)
console.log(myn1);  // Ouput :[1, 2]

console.log("B ", SmyArr);  // Output : B [0, 1, 2, 3, 4, 5, 6]

const myn2 = SmyArr.splice(1,3)
console.log(myn2);  // Output :[1, 2, 3]

console.log("C", SmyArr);  // Output : C [ 0, 4, 5, 6 ]

