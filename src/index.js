const _ = require('lodash');

const input = "   JavaScript   ";

const output = `<div>${input.trim()}</div>`;
console.log("Traditional output:", output);

const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`;
const toLowerCase = str => str.toLowerCase();

// wrapInDiv() and wrapInSpan() are almost identical, it'd be nice if we can parameterize
// these functions
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = type => str => `<${type}>${str}</${type}>`;

const transform = _.flow(_.trim, wrap("div"), toLowerCase);
console.log("Result :", transform(input));

// line 18's output with the commented wrap() is:
// <javascript>undefined</javascript>
// why?

// The _.flow() creates a function that passes the result of each function to the next. In this case,
// the functions are:
// 1. _.trim which takes a string and returns it trimmed.
// 2. Wrap which is defined as (type, str) => `<${type}>${str}</${type}>`.
// 3. toLowerCase which converts a string to lower case.
// Each function in the chain receives exactly one argument—the output of the previous function.

// Your wrap() is designed to take two arguments: a tag type and a string. However, when used in _.flow, it is only receiving one argument. Here’s the sequence:
// 1. The input " JavaScript " is passed to _.trim which returns "JavaScript".
// 2. That trimmed result ("JavaScript") is passed to wrap() as the first argument. Since wrap expects two parameters, this means:
//          type becomes "JavaScript".
//          The second parameter str is undefined because it was not provided.
// 3. So, wrap("JavaScript", undefined) returns <JavaScript>undefined</JavaScript>.
// Finally, toLowerCase is applied, giving <javascript>undefined</javascript>.
// This is why you see <javascript>undefined</javascript> as the final output.

// What we need in the .flow() pipeline is a function with a single parameter.
// We can use currying for this (currying.js).

// On line 17, when you call wrap('div'), the curried function returns a new function waiting for one argument (the string to wrap).
// So wrap('div')("JavaScript") produces <div>JavaScript</div>.