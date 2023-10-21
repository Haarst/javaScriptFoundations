// This lesson we will be delve into Arrays, Array methods and loops


// Array is a structure that stores a collection of data such as numbers, strings and objects
// It is indexed and ordered which mean we are able to access and manipulate its elements
// using numerical inices.

// Arrays are veratile and can grow or shirnk to accomodate new elements, we can perform
// various operations on array like adding, removing or modifying elements for managing
// lists of data.

let fruits = ["apple", "banana", "cherry", "date"];

// Accessing elements by index
console.log(fruits[1]); // outputs: "banana"

// Modifying elements
fruits[1] = "kiwi";
console.log(fruits[1]); // Outputs: "Kiwi"

// Adding elements
fruits.push("grape");
console.log(fruits); // Adds "grape" at end of the array

// Removing elements
fruits.pop();
console.log(fruits); // Removes last index of array

// Finding length of the array
console.log(fruits.length); // Outputs 4

// -----------------------------------

// Loops are used to repeat actions. `for` loops are used to repeat fir a set number of tines

// `while` loops are used to repeat while a condition is true

// Loops are essential for automating tasks in JS

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// -------------------------------

  let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// These examples demonstrate how loops work. 

// Loops will repeat itself while the condition is true
// once the condition is false the loop will break itself

