// Variables
let name = "MERN";
const year = 2025;

// Functions
function greet(user) {
  return `Hello, ${user}`;
}

// Arrow functions
const add = (a, b) => a + b;
console.log(add(3, 5));
// Arrays and objects

let user = { name: "John", age: 25 };
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");

let person = {
  name: "Alice",
  age: 25
};


// Arrays and Objects
// Topics:

// Creating arrays and objects

// Array methods: push, pop, shift, unshift, map, filter, forEach, reduce

// Object properties and methods

// Destructuring


console.log(fruits[1]); // banana
// Objects
console.log(person.name); // Alice



// Loops

for (let fruit of fruits) {
  console.log(fruit);
}



// ES6 Destructuring


const { name: userName, age } = user;


//let age = 20;

if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a minor.");
}


// let, const, var

// Functions and arrow functions

// Objects, arrays, destructuring

// Loops: for, while, forEach, map, filter




