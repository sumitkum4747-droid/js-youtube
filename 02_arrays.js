const marvel_heros = ["Thor","IronMan","SpiderMan"]
const dc_heros = ["SuperMan","Flash","BatMan"]

marvel_heros.push(dc_heros);  // This will input array (dc_heros) in (marvel_heros) --> Array in Array

console.log(marvel_heros);  // Output : ['Thor','IronMan','SpiderMan',['SuperMan','Flash','BatMan']]

// If you want to print flash after pushing dc_heros in marvel_heros
console.log(marvel_heros[3][1]);  // Output : Flash


// To properly merge the both array you can use "concat"
const new_marvel_heros = ["Thor","IronMan","SpiderMan"]
const new_dc_heros = ["SuperMan","Flash","BatMan"]

    // push works on same array but concat return new array so we have to take new array to perform concat 
const all_heros = new_marvel_heros.concat(new_dc_heros);
console.log(all_heros);  // Output : [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

// More proper way to merge array because this will not suitable when more than two array have to merge 
// Spreding method

const new_marvel_heros2 = ["Thor","IronMan","SpiderMan"]
const new_dc_heros2 = ["SuperMan","Flash","BatMan"]

const all_new_heros = [...new_marvel_heros2, ...new_dc_heros2]
console.log(all_new_heros);  // Output : [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]


// If this type of array will come how to deal
const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]]

const real_another_array =  another_array.flat(Infinity);  // here "Infinity" is the depth at which this will work

console.log(real_another_array);




console.log(Array.isArray("Hitesh"));  // Here asking to JS that this Array or not, Output : False
console.log(Array.from("Hitesh"));  // Output : [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"}));  // Can't able to change this to directly to String so return Empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // Output : [ 100, 200, 300 ]

