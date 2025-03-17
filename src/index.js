// Immutability is a core concept in functional programming.
// It means that once a data structure is created, its state cannot be altered.
// This helps ensure that functions remain pure (always producing the same output for the same input)
// and minimizes side effects across your application.

// Example with strings:
// In JavaScript (and many other languages), strings are immutable. When you call a transformation
// method on a string like "toUpperCase()", it returns a new string without modifying the original.
let name = "Ela";
console.log(name.toUpperCase()); // Outputs "ELA"
// Despite the transformation, the value of 'name' remains "Ela".

// Example with objects:
// Unlike strings, objects (and arrays) in JavaScript are mutable by default.
// You can directly modify their properties after creation.
let book = {};
book.title = "Title"; // Mutating the object by adding a new property

// Understanding the benefits of immutability:
//   • Predictability: Immutable data doesn't change after it's created, which helps prevent bugs
//     that arise from unexpected modifications of state.
//   • Efficient Change Detection: Libraries like React leverage immutability to quickly determine
//     when data has changed, optimizing performance in updates.
//   • Concurrency: Since immutable structures don't change, you can safely run functions in parallel
//     without worrying about race conditions or shared state conflicts.

// Bottom line:
// When building applications with Redux—it's crucial to avoid mutating data. Instead, always produce
// new copies of state with any updates. This approach leads to code that is more robust, easier to test,
// and simpler to maintain.