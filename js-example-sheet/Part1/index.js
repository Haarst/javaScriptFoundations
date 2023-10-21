// Total of 3 ways to create a variable in JS
// 1. var - old way of declaring variables
// 2. let - similar to var 
// 3. const - declare variables to values that will not change

// let message --> let(declare) message(variable);
// message = 'Hello'; --> store the string in the variable using the "=" symbol
// is an assignment operator

// alert(message) --> to show the contents inside the variable

let message = 'Hello';
alert(message);

// We can put any value inside this variable as this variable has the properties to be changed
// message = 'world'; // value changed

// we can also copy data from one into another

// let hello = 'hello world';
// let message;

// message = hello; // copied data from another variable

let hello = 'hello world';
let copy;

copy = hello;

console.log(hello);

// variables declared using const are called constants and they cannot be reassigned

const myBirthday = '17-02-2001';
myBirthday = '1-1-1';
alert(myBirthday);

// Take 1!
// 1. Declare two variables: admin and name.
// 2. Assign the value 'John' to name.
// 3. Copy the value form name to admin
// 4. Show the value of admin using alert (must output 'John')

let name, admin;
name = 'John';
admin = name;

alert(admin);

console.log(23 + 97);

console.log(3 + 6 + 9 + 3 + 6 + 9);

console.log((4 + 6 + 9) / 27);

let a = 10;

console.log(a);

console.log(9 + a);

let b = 7 * a;

console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;

//

const btn = document.querySelector('button')
const txt = document.querySelector('p')

btn.addEventListener('click', updateBtn)

function updateBtn() {
    if (btn.textContent === 'Start Machine')
    {
        btn.textContent = 'Stop Machine';
        textContent = 'The machine has started!';
    } else {
        btn.textContent = 'Start Machine';
        txt.textContent = 'The machine is stopped';
    }

}