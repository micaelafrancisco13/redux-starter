// higher-order functions are functions that take a function as an argument or return it
// examples: map() and setTimeout()

const numbers = [1, 2, 3, 4, 5];
const numbersDoubled = numbers.map((number) => number * 2);
console.log("numbersDoubled", numbersDoubled);

setTimeout(() => console.log("Hello World!"), 3000);