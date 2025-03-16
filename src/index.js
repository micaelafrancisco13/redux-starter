// non-functional way
const input = "   JavaScript   ";
const output = `<div>${input.trim()}</div>`;

// example of function composition (functional way)
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// read is from right-to-left
// reading complexity due to the existence of parentheses
const result = toLowerCase(wrapInDiv(trim(input)));

console.log("Result is", result);
