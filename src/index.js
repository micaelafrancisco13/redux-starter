// Import the produce helper function from Immer.
// Using Immer allows us to safely write "mutative" code that results
// in immutable updates to our state.
import { produce } from 'immer';

// Define a book object with nested properties.
const book = {
    title: "Harry Potter",
    author: {
        name: "J.K. Rowling"
    },
    isPublished: false
};

/**
 * Publishes a book by updating its state immutably.
 *
 * This function uses Immer's produce() to create a new version of the book object.
 * The "draft" provided to the recipe function is mutable, meaning we can change
 * its properties directly. However, Immer ensures that these changes are applied
 * immutably, leaving the original book unchanged.
 *
 * @param {Object} book - The original book object to update.
 * @returns {Object} A new book object with updated properties.
 */
function publish(book) {
    // Define a mutation function (often called a "recipe") that receives a mutable copy (draft)
    // of the book. Within this function, we can safely mutate the draft object.
    const mutation = draftBook => {
        // Mark the book as published.
        draftBook.isPublished = true;
        // Update the author's name.
        draftBook.author.name = "Joanne Rowling";
    };

    // Call produce() with the original book and the mutation function.
    // produce() returns a new object that incorporates the changes from the draft,
    // while leaving the original object unmodified.
    return produce(book, mutation);
}

// Create an updated version of the book by publishing it.
const updatedBook = publish(book);

// Output the original and updated book details.
// The original book remains unchanged due to the immutability guarantee of Immer.
console.log("Original book", book);
console.log("Updated book", updatedBook);