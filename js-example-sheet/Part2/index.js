// Data Types

// Number 

let number = 2;

// The big int to represent integers of larget lengths

BigInt = 1242353645746353452534356456544756n;

// Const 

const birthday = '17-02-2001'

// String must be surrounded in quotes

let name = 'John';

alert(`Hello, ${name}`);

// ${...} <- this is called a template string, can only be used within backticks ``

// Boolean logical type 

// the boolen type has only two values, true || false

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater); // this is true

// Used to store yes or no values

// The null value does not belong to any of the types, it forms a seperate type 
// on its own which contains null

// null represents nothing, empty or value unknown e.g

let aged = null;

// The undefined stands for a value that is not assigned

let age = 100;

age = undefined;

alert(age); // returns undefined

// ---------------------------

// The object is special, tgat are ysed ti stire cillections of data and more 
// complex entities
// similary to an array

let John = {
    age: 23,
    height: 180,
    city: 'Auckland'
}

// -------------------------

// typeof operator return the type of the argument

typeof 0; // number
typeof 10n // bigint
typeof "foo" // string

// Symbol type is used to create unique identifiers for objects

// Slice allows extracts a part of a string to and returns the extracted part
// in a new string

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part);

// Position 1 starts from 0, position 2 starts at 1 etc...

// This part will log "Banana"

// ---------------------------

// String Substring() is similar to slice() 
// Difference is that start and end values less than 0 are treated as 0 in subtring()

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 6);
console.log(part)

// This will log Banana

// ------------------------------

// The replace() method replaces a specified value with another value in a string.

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// This replaces Microsoft with W3Schools



