function regularAddition(a, b) {
    return a + b;
}

console.log("Regular addition", regularAddition(2, 3));

// Currying is a technique that allows us to take a function that has N number of parameters
// and convert it to a function that has a single parameter.

function curryingAddition(a) {
    return function (b) {
        return a + b;
    }
}

// curryingAddition() returns a function, so we can call that function and pass our second argument
console.log("Currying addition", curryingAddition(1)(5));

// with currying, instead of separating our arguments with comma, we separate them using parenthesis.

// rewriting curryingAddition() using arrow function:
const curryingAddition2 = a => b => a + b;