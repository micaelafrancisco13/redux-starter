// Define an initial "person" object with a nested "address" property.
const person = {
    name: "John",
    address: {
        country: "United States",
        city: "New York",
    }
};

// Create a shallow copy of the "person" object using the spread operator,
// while updating the "name" property to "Bob".
// Note: This operation only creates a new top-level object; nested objects (like "address")
// still reference the same memory location as in the original "person" object.
const updatedPerson = { ...person, name: "Bob" };

// Changing a property on a nested object will affect both copies because they share the same reference.
// Here, modifying "address.city" on "updatedPerson" also changes it for "person".
updatedPerson.address.city = "San Francisco";
console.log("Original person", person);
// Expected behavior: The original person's city should remain "New York".
// Actual behavior: It shows "San Francisco" because of the shallow copy.

// To avoid this, we need to create a deep copy.
// A deep copy duplicates all nested objects so that each object is completely independent.
const newPerson = {
    ...person,         // Copy all top-level properties from "person".
    name: "Bob",       // Override the "name" property.
    address: {         // Create a new independent copy of the "address" object.
        ...person.address, // Copy all properties of the original address.
        // Optionally, you can update specific properties here.
        // For this example, we explicitly keep the city as "New York"
        // to demonstrate that modifying the new object doesn't affect the original.
        city: "New York"
    }
};
console.log("New person", newPerson);
// Now, even if you later modify newPerson.address, the original person.address remains unchanged.