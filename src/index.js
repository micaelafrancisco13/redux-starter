// Import Lodash using CommonJS syntax
const _ = require('lodash');

// Sample input string
const input = "   JavaScript   ";

// Traditional approach (non-functional)
const output = `<div>${input.trim()}</div>`;
console.log("Traditional output:", output);

// Define individual operations as pure functions
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// Example of function composition (functional way)
// Read from right-to-left: trim, then wrap in div, then convert to lowercase
const resultV1 = toLowerCase(wrapInDiv(trim(input)));
console.log("Result V1 (manual composition):", resultV1);

// COMPOSING
// Using flowRight() from Lodash
// flowRight() combines functions from right to left (last to first)
const composition = _.flowRight(toLowerCase, wrapInDiv, _.trim);
console.log("Result V2 (using compose):", composition(input));

// PIPING
// Using flow() equivalent from Lodash
// flow() combines functions from left to right, improving readability
const transform = _.flow(_.trim, wrapInDiv, toLowerCase);
console.log("Result V3 (using flow):", transform(input));

// Demonstrating the reusability of our composed functions
const anotherInput = "   FUNCTIONAL PROGRAMMING   ";
console.log("Processing another input:", transform(anotherInput));