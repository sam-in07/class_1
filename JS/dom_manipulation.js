// Topics:

// Selecting elements (getElementById, querySelector)

// Changing content/style

// Handling events (click, input)

// Creating/deleting elements

const  body = document.body;
//const div = document.createElement('div');
const div = document.querySelector('div');

div.textContent = "Hello, World!";

const spanhi = document.getElementById('hi');
const spanbye = document.getElementById('bye');

spanbye.remove();
console.log(spanhi.getAttribute("title"));
// bye remove 
// body.appendChild(div);