"use strict";

/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is fun!");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("A Sai Manohar");
console.log(25);

let firstName = "Manohar";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let sai_manohar = "SM";
let $function = 10;

let person = "manohar";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Unemployed";

let job1 = "Programmer";
let job2 = "Unemployed";

console.log(myFirstJob);
*/

/*
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 24);
console.log(typeof "Sai Manohar");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);
*/

/*
const now = 2037;
const ageSai = now - 2001;
const ageRambo = now - 2013;
console.log(ageSai, ageRambo);

console.log(ageSai * 2, ageRambo / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sai";
const lastName = "Manohar";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageSai > ageRambo); // >, <, >=, <=
console.log(ageRambo >= 18);

const isFullAge = ageRambo >= 18;

console.log(now - 2001 > now - 2013);
*/

/*
const now = 2037;
const ageSai = now - 2001;
const ageRambo = now - 2013;
console.log(now - 2001 > now - 2013);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageSai + ageRambo) / 2;
console.log(ageSai, ageRambo, averageAge);
*/
/*
const firstName = "A Sai Manohar";
const job = "Unemployed";
const birthYear = 2001;
const year = 2026;

const sai =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(sai);

const saiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(saiNew);

console.log(`Just a regular string.....`);
console.log(
  "String with \n\
  multiple \n\
  lines",
);

console.log(`String with 
  multiple
  lines...
  `);
*/

/*
const age = 17;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Rambo can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Rambo is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// type conversion
const inputYear = "2001";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sai"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 24 + " years old");
console.log("I am " + String(24) + " years old");
console.log(`I am ${24} years old`);
console.log("24" - "10" - 3);
console.log("24" * "2");
console.log("24" + "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0 , '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sai Manohar"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}
*/
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //'23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive....");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/*
const day = "Monday";
switch (day) {
  case "Monday": // day === 'Monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record Videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

/*
const age = 24;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 🚰");

const drink = age >= 18 ? "wine 🍷" : "water 🚰";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 🚰";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🚰"}`);
*/
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/
/*
function logger() {
  console.log("My name is A Sai Manohar");
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);

const num = Number("24");
console.log(num);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Array function
const calcAge3 = (birthYear) => 2035 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 62 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2001, "A Sai Manohar"));
console.log(yearsUntilRetirement(1971, "A V Ramana"));
console.log(yearsUntilRetirement(1980, "A Pranitha"));
console.log(yearsUntilRetirement(2000, "A Shilpa"));
console.log(yearsUntilRetirement(1982, "P Praveen"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 62 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  // return retirement;
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2001, "A Sai Manohar"));
console.log(yearsUntilRetirement(1950, "A Rambo"));
*/
/*
const friend1 = "A Sai";
const friend2 = "A Manohar";
const friend3 = "A Rambo";

const friends = ["A Sai Manohar", "A Manohar", "A Rambo"];
console.log(friends);

const years = new Array(2001, 1980, 2013, 1971, 2000);
console.log(years);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "A Rams";
console.log(friends[friends.length - 1]);
// friends = ["Bob, Abc, Xyz"]; This is not possible

const firstName = "A";
const sai = [firstName, "Sai", "Manohar", 2026 - 2001, "Unemployed", friends];
console.log(sai);

// Exercise
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const years1 = [2001, 2005, 2008, 2013, 2019, 2023];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[2]);
const age4 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[2]),
  calcAge(years1[years1.length - 1]),
];
console.log(ages);
*/
const friends = ["A Sai", "A Rambo", "A Shilpa"];

// Add Elements
const newLength = friends.push("A Manohar");
console.log(friends, newLength);

friends.unshift("Hari");
console.log(friends);

// Remove Elements
friends.pop(); // removes the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element
console.log(friends);

console.log(friends.indexOf("A Rambo"));
console.log(friends.indexOf("Bob"));

friends.push(24);
console.log(friends.includes("A Rambo"));
console.log(friends.includes("Bob"));
console.log(friends.includes(24));

if (friends.includes("A Rambo")) {
  console.log("You have a friend called A Rambo");
}
