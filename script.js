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

const age = 17;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Rambo can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Rambo is too young. Wait another ${yearsLeft} years :)`);
}
