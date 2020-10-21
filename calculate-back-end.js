/******************
 * YOUR CODE HERE *
 ******************/

function calculate(num1, num2, operator) {
// Convert inputs to a number with 'Number()'
  num1 = Number(num1);
  num2 = Number(num2);

// Method 1: Ternary
  return operator === '+' || operator === 'plus' || operator === 'added to' ? num1 + num2
        : operator === '-' || operator === 'minus' || operator === 'subtracted from' ? num1 - num2
        : operator === 'x' || operator === 'times' || operator === 'X' || operator === 'multiplied by' ? num1 * num2
        : operator === '/' || operator === 'divided' || operator === 'divided by' ? num1 / num2
        : operator === '%' || operator === 'mod' || operator === 'modulus' ? num1 % num2
        : `Sorry, that\'s not a mathematical operation!`;

// Method 2: If / Else
  // // Addition
  // if (operator === '+' || operator === 'plus' || operator === 'added to') {
  //   return num1 + num2;
  // }
  // // Subtraction
  // else if (operator === '-' || operator === 'minus' || operator === 'subtracted from') {
  //   return num1 - num2;
  // }
  // // Multiplication
  // else if (operator === 'x' || operator === 'times' || operator === 'X' || operator === 'multiplied by') {
  //   return num1 * num2;
  // }
  // // Division
  // else if (operator === '/' || operator === 'divided' || operator === 'divided by') {
  //   return num1 / num2;
  // }
  // // Modulus
  // else if (operator === '%' || operator === 'mod' || operator === 'modulus') {
  //   return num1 % num2;
  // }
  // // Error Message
  // return `Sorry, that\'s not a mathematical operation!`;
}

/*
* parseFloat()
The parseFloat() method converts a string into a point number (a number with decimal points).
You can even pass in strings with random text in them.

var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
// returns 3.14

* parseInt()
The parseInt() method converts a string into an integer (a whole number).
It accepts two arguments. The first argument is the string to convert.
The second argument is called the radix. This is the base number used in mathematical systems.
For our use, it should always be 10.

var text = '42px';
var integer = parseInt(text, 10);
// returns 42

* Number()
The Number() method converts a string to a number.
Sometimes it’s an integer. Other times it’s a point number.
And if you pass in a string with random text in it, you’ll get NaN, an acronym for “Not a Number.”
As a result of this inconsistency, it’s a less safe choice than parseInt() and parseFloat().
If you know the format of the number you’d like, use those instead.
If you want the string to fail with NaN if it has other characters in it, Number() may actually be a better choice.

Number('123'); // returns 123
Number('12.3'); // returns 12.3
Number('3.14someRandomStuff'); // returns NaN
Number('42px'); // returns NaN
*/

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;