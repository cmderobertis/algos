// Variables and Datatypes

// creating a variable

var myName = "Cameron De Robertis"

// Rules for naming variables:
    // Cannot start with a number
    // Cannot have hyphen
    // Cannot have whitespace
    // Cannot use reserved keywords

// Strings

var num = '1' //<-- is a string, not a number
var space = ' '
var firstName = 'Cameron'
var lastName = 'De Robertis'
console.log(firstName, lastName);

// String concatenation
var fullName = firstName + space + lastName
console.log(fullName);

// Numbers
    // Floating point number (with decimals)
    // Integer (whole number)

var num1 = 35.1
var num2 = 76
console.log('num1 is a', typeof num1);
console.log('num2 is a', typeof num2);

// Operators
    // Addition (+)
    // Subtraction (-)
    // Multiplication (*)
    // Division (/)
    // Modulo (%)
    // Exponentiation (**)

// Boolean
    // true or false

var isTrue = true
var isRaining = false
var hasPurpose = true

// Boolean expressions
    // will evaluate to true or false

console.log(3 > 2); //<-- true
console.log(3 < 2); //<-- false

// For loops need:
    // Named sentry (iterator)
    // Where it starts 'i is ___'
    // Where it ends 'as long as ___'
    // How it changes 'increment/decrement i'

for (var i = 1; i <= 1000; i++) {
    console.log(i)
}
console.log(i);

// Create a for loop that prints every integer from 1 to 255
for (var i = 1; i < 256; i++) {
    console.log(i)
}