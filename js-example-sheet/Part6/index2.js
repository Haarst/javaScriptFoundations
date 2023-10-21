// I'm adding an extra file due to space 

// Events 

/*Now that we are able to manipulate the DOM with JS we will now learn how to 
make that happen dynamically or on demand!

Events are actions that occur on our webpage such as mouse-clicks or keypresses and using 
JS we can make our webpage listen and react to these events!*/

/* There are 3 ways to go about this: 

We can specify function attributes directly on our HTML elements by setting properties
of form*/ on[eventType] (onclick, onmousedown, etc)

/* DOM nodes in our JS or we can attatch event listeners to the DOM nodes in our JS

These methods are the preffered method but we will regularaly see others in use. 

These next 3 examples are buttons that all alert "Hello World" when clicked*/

// <button onclick="alert"('Hello World')">Click Me</button>

// Dont use the method above

// Method 2 

/* <!-- the HTML file -->
<button id="btn">Click Me</button> */

// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Method 3 

/*<!-- the HTML file -->
<button id="btn">Click Me Too</button>*/

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});

// Note all 3 of these methods can be used with named functions like so: 

/* <!-- the HTML file -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button> */

// JAvaScript FIle

function alertFunction () { 
    alert("Hello ! ! ");
}

// Method 2

btn.onclick = alertFunction;

// Method 3 

btn.addEventListener('click', alertFunction);


// With all three methods we can access more information about the event by passing 
// a parameter to the function that we are calling 

btn.addEventListener('click', function (e) {
    console.log(e);
})

/* function (e) is a callback from addEventListener, The e is an object that references the 
event itself within that object we have access to many useful properties and methods*/

// Example: 

btn.addEventListener('click' function(e) { 
    e.target.style.background = 'blue';
});


// Another example of attaching listeners to groups of nodes

// HTML File

/* <div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div> */

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button

buttons.forEach((button)) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    })
};

/* Some useful events include:

click
dblclick
keydown
keyup */