// In this lesson we have learnt about functions and how they are used

/*A JavaScript function is a reusable block of code that performs a 
specific task or action when called. It takes input (parameters), 
processes it, and returns an output. Functions are essential for 
organizing and encapsulating code in a structured manner, making
your code more modular and maintainable.*/

function add7 (addNumber) { 
    return addNumber + 7;
}

console.log(add7(7));

function multiply (numberMulitply, multiplyNumber) {
    return numberMulitply * multiplyNumber;
}

console.log(multiply(7, 7));

function capitalize (capitalizeString) {
    allLowerCase = capitalizeString.toLowerCase();
    firstLetterCap = allLowerCase.charAt(0).toUpperCase + allLowerCase.slice(1);
    return firstLetterCap;
}

console.log(capitalize("James"));

function lastLetter (lastLetterString) { 
    return lastLetterString.slice(-1);
}

console.log(lastLetter("James"));

