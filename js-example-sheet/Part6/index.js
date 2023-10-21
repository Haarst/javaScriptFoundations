// DOM - Document Object Model
/*The Dom is a tree model representation of the contents of a webpage
with different relationships depending on how they are arranged in the HTML document*/

// Targeting nodes with selectors 
/*When we want to work with the DOM we use selectors to target the nodes we want to with work

Follow with the given example: 

<div class="display"></div>:


To target this we want to use selectors: */

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

// DOM methods

/*When HTML is parsed by a web browser it is converted to the DOM mentioned above

A primary difference is that these bodes are objects that have many properties 
and methods attatched to them

These methods and properties are the primary tools we are going to use to manipulate
our webpage with JS.

Firstly starting with query selectors - these can help us target nodes*/

Element.querySelector(selector) // returns a reference to the first match of selector

Element.querySelectorAll(selector) // returns a nodelist containing references to all of the
// matches of the selectors

/* There are several other more specific queries that offer potential performance benefits
but we wont be going over them now */

// Element creation 

document.createElement(tagName, [options]) /* creatses a new element of tag type tagName
[options] in this case means we can add some optional parameters to the function*/

const div = document.createElement('div');

/* This function does not put our element into the DOM, we have simply created it in 
memory. This is so we can manipulate the element by adding styles, classes, ids etc
before placing it onto our webpage

To place the element into out DOM, we can use the following methods*/ 

parentNode.appendChild(childNode); // Appends childNode as the last child of the parentNode

parentNode.insertBefore(newNode, referenceNode) // Inserts newNode into parentNode before referenceNode

// Removing elements

parentNode.removeChild(child) // removes child from parentNode on the DOM and returns
// a reference to a child 

// Altering elements

/* When we hace a reference to an element we can use this refernece to alter the elements
owns properties

Alterations like adding/removing and altering attributes and changing classes adding inline style information
and more*/

const div = document.createElement('div');

// creates a new div referenced in the variable div

// Adding inline style

div.style.color = 'blue';

div.style.cssText = 'color: blue; background: white;';

div.setAttribute('style', 'color: blue; background: white;');

// Editing attributes 

div.setAttribute('id', 'theDiv');

// if id exists, update it to 'theDiv', else create an id
// with value "theDiv" 

div.getAttribute('id');

// returns value of specified attribute, in this case
// "theDiv" 

div.removeAttribute('id');

// remove specified attribute

// Working with classes

div.classList.add('new');

// adds class "new" to your new div

div.classList.remove('new');

// removes "new" class from div

div.classList.toggle('active');

// if div doesnt have class "active" add it or if it does, then remove it

// Adding text content

div.textContent = 'Hello World!'

// creates a text node containing "Hellow World!" and 
// inserts it in div

// Adding HTML content

div.innerHTML = '<span>Hello World!</span>';

// render the HTML inside div

