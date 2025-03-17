// IMPURE FUNCTION EXAMPLE
// ------------------------------------------------------
// This function is considered impure because it produces different
// results even when given the same input.
// It relies on Math.random(), which introduces an unpredictable element.
function myFunction(number) {
    return number * Math.random();
}

// PURE FUNCTION EXAMPLE
// ------------------------------------------------------
// A pure function always returns the same result when given the same input,
// and it does not produce any side effects.
// The function below always returns the result of number multiplied by 2,
// regardless of any external state.
function multiplyByTwo(number) {
    return number * 2;
}

// GUIDELINES FOR PURE FUNCTIONS
// ------------------------------------------------------
// When writing pure functions, you should avoid:
//   - Using random values (e.g., Math.random())
//   - Relying on the current date or time
//   - Accessing or modifying global state (e.g., DOM elements, files, databases)
//   - Mutating the input parameters
//
// Note: Although functional programming encourages writing pure functions,
// not every function in an application must be pure.
// For example, Redux reducers are required to be pure.

// IMPURE FUNCTION DEPENDING ON EXTERNAL STATE
// ------------------------------------------------------
// This function checks if a given age is greater than a global variable 'minAge'.
// Because it depends on an external variable, its result may change if 'minAge'
// is modified elsewhere in your code, making the function impure.
function isEligible(age) {
    return age > minAge;
}

// TRANSFORMING AN IMPURE FUNCTION TO A PURE FUNCTION
// ------------------------------------------------------
// To make the function pure, we should remove any dependency on external state.
// In this revised version, 'minAge' is passed as a parameter, ensuring that:
//   - **Self-documenting:** All required data is explicitly provided as function parameters.
//   - **Easily testable:** There is no dependency on global state when testing the function.
//   - **Concurrency-safe:** The function does not depend on or modify shared state.
//   - **Cacheable (Memoizable):** Repeated calls with the same arguments will always yield
//     the same result, enabling caching for performance.
function isEligible(age, minAge) {
    return age > minAge;
}