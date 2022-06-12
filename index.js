// Part 1
// Make variables and constants as prescribed below

//Modify the code below to make a constant called myConstant and assign an integer to it
let myConstant;

//Use the var keyword to change the code below, then assign value 3.33 to myVar
const myVar = null;

//Use the let keyword to change the code below and to assign value false to myBoolVal
var myBoolVal;

//Use the let keyword to change the code below and to assign value 'Northeastern University'
var myStingVar;

const constantIdentifier = (type) => {
    if(type === 'const'){
        myConstant = "You cannot reassign constants";
    } else {
        console.log(myVar);
        myVar += 1;
        console.log(myVar);
    }
}

// Part 2
// Compelete the functions to pass the tests

//Task one: function subtract() should subtract parameter b from parameter a

function subtract(a,b){
    return null; //add your code here
}

//Task two: function add() should add two numbers
//Remember that if one tries to use a + on strings, they get concatenated

function add(a,b){
    return null; //add your code here
}

//Task three: function areaRectangle() should calculate the area of a rectangle

function areaRectangle(length,width){
    return null;
}

//Task four: oddOrEven() should accept a number as a parameter and return "odd" or "even"

function oddOrEven(number){
    return null; //add your code here
}

//Task five: isItString() takes a parameter and return true if it is a string

function isItString(value){
    return null; //add your code here
}

//Task six: isInteger() takes a parameter and return true if it is a whole number

function isInteger(value){
    return null; //add your code here
}

//Task seven: lengthText() takes a string and returns its length

function lengthText(str){
    return null; //add your code here
}

//Task eight: reverseString() takes a string and reverses it. reverseString(“hello”) should return “olleh”

function reverseString(str){
    return null; //add your code here
}

//Task nine: doubleChar() should return the parameter string with each character repeated once.
// doubleChar(“hello”) should return “hheelllloo”

function doubleChar(str){
    return null; //add your code here
}

//Task ten: disemvowel() should remove all of the vowels from the parameter string
// disemvowel(“hello”) should return “hll”

function disemvowel(str){
    return null; //add your code here
}

module.exports = {
    myConstant,
    myVar,
    myBoolVal,
    myStingVar,
    constantIdentifier,
    add,
    subtract,
    areaRectangle,
    oddOrEven,
    isItString,
    isInteger,
    lengthText,
    reverseString,
    doubleChar,
    disemvowel
};