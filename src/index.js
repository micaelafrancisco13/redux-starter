// In JS, functions are treated as first-class citizens

// Meaning:

// a) they can be assigned to a variable
function sayHello() {
    return "Hello World!";
}

const greet1 = sayHello;
console.log("Greet 1", greet1());

// b) they can be passed as an argument to a function
function greet2(greet) {
    console.log("Greet 2", greet());
}

greet2(sayHello);

// c) they can be returned from a function
function greet3() {
    return sayHello();
}

console.log("Greet 3", greet3());