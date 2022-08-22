console.log('Hello World from main.js');
// ; is what ends a line
// ; is syntactical sugar

// Basics of JavaScript

/* multi
line 
comment */

/*  -- Variable Declaration in JS
    Primitive Data types: String, Number, Boolean, undefined, Null   (cannot be mutated; can be reassigned though)
    Object: Object, Array, Function

    Control flow
*/

// naming convention in JS: camelCase

// Variable Declaration
var myName;
console.log(myName);

// String Declaration
var myName = 'Rebecca';
console.log(myName);
console.log(typeof myName);

// String can be created using '', "", or ``. The tick marks (``) have a special behavior to format the string
// Tick marks + ${varName} is equivalent to f"{varName}" in Python

console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);


// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14
 console.log(pi);
 console.log(typeof pi);

// Boolean
var boolTrue = true;

console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// undefined
var something;
console.log(something)
console.log(typeof something);


// Null
var someNull = null;
console.log(someNull);
console.log(typeof someNull);



// Object types   (sort of like dictionary in python)

var myObject = {
    a: 123,
    test: 'Hello!',
};

console.log(myObject);
console.log(typeof myObject);


// Array   (special type of object, where the "keys" are the index numbers)
// has a length property that states how many items in array
var myArr = ['Rebecca', 'Austin', 'Coding Temple'];
console.log(myArr);
console.log(typeof myArr);


// Function    (also a special type of object)
function abc(){};    //this is like writing a func in python with 'pass' in func block

console.log(abc);
console.log(typeof abc);


// Accessing Properties in Objects
var person = {
    first: 'Rebecca',
    last: 'Peace', 
    languages: ['Python', 'JavaScript'],
};

console.log(person);
person.first = 'Frank'  // just updating and mutating original object;
console.log(person);

// bracket notation
console.log(`My first name is ${person['first']}`);

// dot notation
console.log(`My last name is ${person.last}`);

// Accessing values in an Array
// can only use bracket notation with an array
var newArr = [2, 4, 6, 8, 10];

console.log(newArr);

console.log(newArr[2]);

// arrays also have a length property automatically added
console.log(newArr.length);

var mixedArr = [1, 'Hello', {a: 123, b: 321}, [1, 2, 3], function abc(){}]
console.log(mixedArr);
console.log(mixedArr[2]['a']);
console.log(mixedArr[2].a)       // these are the same; if you use bracket, put key in string

console.clear();

// let and const

// let keeps our variable scoped to the block that it is in
// let - Allows us to declare a variable similar as var does, but let is block scoped while var is global scoped
let myCity = 'Austin';
console.log(myCity);

// create a block with {}
if (true){
    var myState = 'Texas';   // declare global variable myState
    let color = 'blue';      // declare block variable color
    let myCity = 'Dallas';   // declare block variable myCity
    console.log(myCity, myState, color);
}

console.log(myCity, myState);

// const - similar to let (block scoped) - 2 main differences: 1. needs a value when declared, 2. it cannot be reassigned
const newVariable = 'something';
console.log(newVariable)

// newVariable = 'another thing'    -- this gives us an uncaught typeerror

const myBirthday = true;
let ageOfPerson = 40;
if (myBirthday){
    const favColor = 'orange';
    ageOfPerson = ageOfPerson + 1;   // okay to do bc ageOfPerson was declared with let
    console.log(ageOfPerson);
    console.log(favColor);
}

// console.log(favColor);       looking for a global variable but favColor is block (not defined)

const cities = ['Austin', 'Chicago', 'New York', 'Denver', 'San Diego'];

console.log(cities);

cities[1] = 'Tokyo';    // only cities cannot be redefined, but you can redefine items in the object

console.log(cities);

// cities = ['Austin', 'Portland'];   // this does not work

const newPerson = {
    first: 'Abraham',
    last: 'Lincoln',
}

console.log(newPerson)

newPerson['first'] = 'Abe'

console.log(newPerson)

// newPerson = {                  // not allowed
//     first: 'George',
//     last: 'Washington'
// }


// use const for primitive types

console.clear();

/* 
    basic math operations
*/

// addition
let sum = 5 + 5
console.log(sum);
sum += 5;           // sum = sum + 5
console.log(sum);
sum++;              // sum = sum + 1  // sum += 1
console.log(sum);

// subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3;
console.log(diff);
diff--;
console.log(diff);

// multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 2;
console.log(prod);

// division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2;
console.log(quotient)

// exponents
let square = 5 ** 2
console.log(square);
square **= 2;         // square = square ** 2
console.log(square)

// modulo
let remainder = 19 % 4
console.log(remainder);
remainder %= 2;        // remainder = remainder % 2
console.log(remainder)

// floor division (integer division)   - no built in operator  - use builtin math module
console.log(Math)
let floor = Math.floor(19/4)
console.log(floor)


// + operator with a number and string     // this throws a typeerror in python
let myString = 'My age is ';
let myNewAge = 55;

let addedString = myString + myNewAge;
console.log(addedString);

console.log(typeof addedString)


console.log(square);

let quizOne = square + '4';      // will result in '6254'

console.log(quizOne);

let quizTwo = square - '4';       // will result in 621
console.log(quizTwo);

console.log(5+5+'5');

console.log('5'+5+5);

console.clear()

// JavaScript Comparisons

console.log(5 == 5);

console.log(5 == 5.0);

console.log(5 == '5');    // allows for type conversion

console.log(5 === '5');    // gives you false
// == checks for equality while allowing for type conversion   (loose equality)
// === checks for equality but does not allow for type conversion  (strict equality)

console.log(1 == true);


console.log('10' < 5);

// be careful with type conversions

console.log('10' > '9');   // since both are strings, they are not converted to integers bc they are of the same type

// when JS compares objects, it looks for REFERENCE ONLY!!!!!!  (vs. python which compares values)

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
console.log(arr1 == arr2);    // returns false
console.log(arr1 === arr2);   // still get false

let animals = ['cat', 'bird', 'dog'];
let newerArr = animals;

console.log(animals);
console.log(newerArr);

console.log(animals == newerArr);
console.log(animals == ['cat', 'bird', 'dog']);
console.log(newerArr == ['cat', 'bird', 'dog']);

animals.push('horse');
console.log(newerArr);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Equal no conversion (!==)

console.log(5 != '5');
console.log(5 !== '5');

console.clear();


// Control Flow

/* if (condition expression){
    code to execute if true
}
*/

let newNumber = 70;

console.log('Begin');
if (newNumber > 65){
    console.log('Senior')
} else if (newNumber > 18){
    console.log('Adult')
} else {
    console.log('Child')
};
console.log('End');


// Ternary operator

// PYTHON -- age_group = 'Adult' if age > 18 else 'Child'
// JS -- (condition) ? value if true : value if false

let ageGroup = (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup);

// PYTHON: age_group_2 = 'Senior' if age > 65 else 'Adult' if age > 18 else 'Child'

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup2);


// && - and
// || - or

newNumber = 10;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult')
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount')
};

console.clear()

/*
    JavaScript Loops
    for, for...in, for...of, while, do while
*/

// Standard For loop
// for (counter; expression/condition; increment/decrement for counter){code to execute each loop}

console.log('Loop has started')

for (let i = 0; i <= 20; i++){
    console.log(i)
};

console.log('Loop has ended');

let colors = ['red', 'green', 'pink', 'yellow'];

for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i])
};


// for...in  -- used to loop over the properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// for (let variable in obj){code to execute for each property in object}
for (let t in teams){
    console.log(t);
    console.log(teams[t]);
};



// for...of -- used to loop over the elements in an Array
let planets = ['Earth', 'Venus', 'Mars', 'Saturn', 'Jupiter'];

for (let p of planets){
    console.log(p)
}

for (let p in planets){
    console.log(p)
    console.log(planets[p]);
}

// in loops over the properties of an object and of loops over elements in an array
// you can use for...in for objects and arrays
// but you cannot use for...of for objects



// while loop
// while (condition){code to execute while condition is true}
let num1 = 1;
while (num1 < 10){
    console.log(num1);
    num1++;
}

// do while loop
// do the first portion AT LEAST ONCE
// if the while condition is still true, continue the while loop

// do {code to execute} while (condition)

let k =1

do {
    k *= 2;
    console.log(k);
} while (k < 10);

// do {
//     var firstName = prompt('What is your name?')
// } while (firstName !== 'Rebecca');


