const tinderUser = new Object()

tinderUser.id = "123abc";
tinderUser.name = "Sumit";
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "sumit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sumit",
            lastname : "Yadav",
        }
    }
}

console.log(regularUser.fullname);  // Output : { userfullname: { firstname: 'Sumit', lastname: 'Yadav' } }
console.log(regularUser.fullname.userfullname);  // Output : { firstname: 'Sumit', lastname: 'Yadav' }
console.log(regularUser.fullname.userfullname.firstname);  // Output : Sumit

//  Combining Objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2}
// console.log(obj3);    
    // Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }
    // Here objects are not merged by writing this type of syntax only two different objects get collected in one Object

// right way to merge the two object 
const obj3 = Object.assign({}, obj1, obj2);  // If here you will not put empty "{}" then also it works but then merge will happen and stored in first object given in line like here in "Obj1"
console.log(obj3);  // Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Easiest way to do this spreading method used in array also 
const source1 = {1: "A", 2: "B"}
const source2 = {3: "C", 4: "D"}

const result = {...source1, ...source2}
console.log(result);  // Output : { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// Array of Objects
const user =[
    {
        id: 1,
        email: "sumit@gmail.com",
    },
    {
        id: 4,
        email: "ramesh@gmail.com",
    },
    {
        id: 7,
        email: "binod@gmail.com",
    }
]

console.log(user[0].email);  // Output : sumit@gmail.com

console.log(Object.keys(tinderUser));  // Output : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // Output : [ '123abc', 'Sumit', false ]
console.log(Object.entries(tinderUser));  // Output : [ [ 'id', '123abc' ], [ 'name', 'Sumit' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Output : true
console.log(tinderUser.hasOwnProperty('isLogged'));  // Output : false

