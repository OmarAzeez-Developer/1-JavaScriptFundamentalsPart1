// Values and Variables
/*
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// use console.log to output result
console.log(40 + 8 + 23 - 10);
console.log("Omar");
console.log(7);

// declare a variable
let firstName = "Omar";
let lastName = "Azeez";
console.log(firstName + " " + lastName);

// 7omar ==> can not do this to decalre a variable
// omar&azeez ==> can not do this to decalre a variable 
// you can use only letters, numbers attached to end of letters, ($) (_) sign attached to end or beginning of letters

let omar7 = 7;
let omar$ = 77;
console.log(omar7);
console.log(omar$);

// you can not use let new = value ==> new is reserved keyword in JS
// you can not use let function = value ==> function is reserved keyword in JS

// do not FirstName instead use firstName when you decalre
// do not use name when you declare variable instead use firstName or lastName
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Data Types
/*
// boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);

// type of the value
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 7);
console.log(typeof "Omar");

// re-assign value of variable
javascriptIsFun = "YES!" 
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// let, const, var
/*
// let
// re-assign vale ==> mutated variable because you used let
let age = 35;
age = 37;

// const
// const can not be changed ==> can not be mutated because you use const
// const birthYear; ==> you can not use const to declare empty variable
const birthYear = 1989;

// var
var job = "Programmer";
job = "Developer";
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Basic Operators
/*
// math operators
const now = 2037;
const ageOmar = now - 1989;
const ageAbdullah = now - 1991;
console.log(ageOmar, ageAbdullah);

// 7 ** 3 means  7 * 7 * 7 = 343
console.log(ageOmar * 2, ageAbdullah / 2, 7 ** 3);

// concatenate
const firstName = "Omar";
const lastName = "Azeez";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5;
console.log(x);

// x += 10 means 15(x) + 10 = 25
x += 10;
console.log(x);

// x *= 4; means 25(x) * 4
x *= 4;
console.log(x);

// x++; means x + 1
x++;
console.log(x);

x--;
x--;
console.log(x);

// comparison operators
console.log(ageOmar > ageAbdullah);
console.log(ageAbdullah > ageOmar);
console.log(ageOmar >= 18);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Operator Precedence ==> which operator is executed first
/*
const now = 2037;
const ageOmar = now - 1989;
const ageAbdullah = now - 1991;

console.log(now - 1991 > now - 2018);

let x, y;
// subtraction is executed first then execute the equal
x = y = 25-10-5;
console.log(x, y);

const averageAge = (ageOmar + ageAbdullah) / 2
console.log(ageOmar, ageAbdullah, averageAge);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Strings and Template Literals
/*
const fullName = "Omar Azeez";
const job = "Developer";
const birthyear = 1989;
const currentYear = 2024;
const age = currentYear - birthyear;

// normal way to do it
console.log("I am " + fullName + ", a " + age + " years old " + job + "!");

// template literal
const omarTemplateLiteral = `I am ${fullName}, a ${age} years old ${job}!`;
console.log(omarTemplateLiteral);

console.log(`I am Omar Azeez`);

// template literal for new line ==> hit the enter key 
console.log(`First Line
Second Line
Third Line`)
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Taking Decisions: if / else Satements
/*
const age = 17;
// use boolean to check if true
// const isOldEnough = age >= 18;
// if(isOldEnough) {
//     console.log("Old enough to drive!");
// }

// more common way to check
if(age >= 18) {
    console.log("Old enough to drive!");
} else {
    const yearLeft = 18 - age;
    console.log(`Not old enough, wait another ${yearLeft} year `);
}

const birthYear = 1989;
let century;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** heightJohn);
console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than john's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Type Conversion and Coercion
/*
// type conversion is converted manually
const inputYear = "1991";
// convert string to a number
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

// not a number 
console.log(Number("Omar"));
console.log(typeof NaN);

// convert number to a string 
console.log(String(7), 7);

// type coercion is converted automatically
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

// not the + sign because it will be concatenated
console.log("23" + "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Truthy and Falsy Values
/*
// 5 falsy values: 0, "", undefined, null, Nan they will be false when they be converted to boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("omar"));
console.log(Boolean({}));

const money = 0;
// because 0 is falsy value then it is false then it went to the else condition
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if(height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Equality Operators: == vs ===
/*
// strict and loose
const age = 18;

// loose
// const age = "18";

// === does not perform type coercion
if(age === 18){
    console.log("You are an adult! ===> STRICT");
}

// == does perform type coercion
if(age == 18){
    console.log("You are an adult! ===>  LOOSE");
}

//  always use === when comparing values

// get input from user
const graduateYear = prompt("When are you graduate?");
console.log(graduateYear);
console.log(typeof graduateYear);

// loose operator => == 
if(graduateYear == 2024) {
    console.log("Congarts!");
} else if(graduateYear == 2025) {
    console.log("Congarts!");
}
 else {
    console.log("Sorry");
}

// strict operator => === 
if(graduateYear === 2024) {
    console.log("Congarts!");
} else if(graduateYear === 2025) {
    console.log("Congarts!");
}
 else {
    console.log("Sorry");
}

// to solve this issue, rap user input into a Number to convert input String to a Number so === works fine
// const graduateYear = Number(prompt("When are you graduate?"));

if(graduateYear !== 2024) {
    console.log("Why not 2024?");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Logical Operator
/*
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive) {
    console.log("She can Drive...");
} else {
    console.log("She can NOT Drive...");
}

const isTired = true;
console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log("She can Drive...");
} else {
    console.log("She can NOT Drive...");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3
/*
const averageDolophins = (97 + 112 + 101) / 3 ;
const averageKoalas = (109 + 95 + 106) / 3;

if(averageDolophins > averageKoalas && averageDolophins >= 100) {
    console.log("Dolophins are the winners");
} else if (averageKoalas > averageDolophins && averageKoalas >= 100) {
    console.log("Koalas are the winners");
} else if (averageDolophins === averageKoalas && averageDolophins >= 100 && averageKoalas >= 100) {
    console.log("Both teams has the same score");
} else {
    console.log("No Team Wins the Trophy");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The Switch Statement
/*
// switch statement is a strict comparison
const day = "Monday";

switch(day) {
    case "Monday":
    case "Friday":
        console.log("Take it easy");
        console.log("Working from home");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":    
        console.log("Drive to work");
        console.log("Working in office");
        break;
        default:
            console.log("Not a valid day of the week");
}

if(day === "Monday" || day === "Friday") {
    console.log("Take it easy");
    console.log("Working from home");
} else if(day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    console.log("Drive to work");
    console.log("Working in office");
} else {
    console.log("Not a valid day of the week");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Statements and Expressions
/*
// Expression
3 + 4
1989
true && false && !false

console.log(`I am ${2024 - 1989} years old`);

// Statement
if(3 > 1) {
    const str = "3 is Greater than 1";
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The Conditional (Ternary) Operator
/*
// ternary operator
const age = 22;
age >= 18 ? console.log("I will get a driver license"): console.log("I will not get a driver license");

// ternary operator
const getLicense = age >= 18 ? "License" : "No License";
console.log(getLicense);

// ternary operator inside a template literal
console.log(`I will get a ${age >= 18 ? "License" : "No License"}`);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4
/*
let tip;

let bill = Number(prompt("How much is your bill?"));

console.log(`The Bill is $${bill}`);
console.log(`The Tip is $${bill >= 50 && bill <= 300 ?  tip = bill * 0.15 : tip = bill * 0.20}`);
console.log(`The Total is $${bill + tip}`);
*/





