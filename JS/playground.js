function number() {
    return 42;
}

console.log(number());



// Single parameter, implicit return
const double = x => x * 2;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const greet = () => console.log("Hello!");

// Returning an object
const getUser = () => ({ name: "Alice", age: 25 });

// Using with array methods
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);

console.log(double(5));      // 10
console.log(add(3, 4));      // 7
greet();                     // Hello!
console.log(getUser());      // { name: "Alice", age: 25 }
console.log(squared);        // [1, 4,