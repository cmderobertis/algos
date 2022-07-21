// Functions - What are they?
    // Series of steps that accomplish a task.

// Function declaration
    // does nothing until called

function greet() {
    console.log('Hello buddy!');
}

// Calling a function

greet() //<--logs 'Hello buddy!'

// Parameters
    // variables used by function to add functionality

function greetWithName(timeOfDay, nameInput) {
    console.log('Good ' + timeOfDay + ', ' + nameInput + '!');
    console.log(`Good ${timeOfDay}, ${nameInput}!`);
}

// Arguments
    // data passed in to be assigned to parameters during invocation

greetWithName('morning', 'Omar')

// Return statement
    // "Imagine a hotdog vendor who tells you he has hotdogs, but never sells you one."

function add(num1, num2) {
    console.log(num1 + num2);
}
add(2, 4) //<-- logs 6

    // ...it's not exactly helpful
    // we can use a return statement to 'return' a value from the called function

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(2, 4));

    // now we can actually USE that sum for other things. Much better!
