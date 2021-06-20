/**
 * declaration varaible
 */

// let a = 9;
// console.log("a-value", a);

// a = "aaaa";

// console.log("a-value", a);

// const b = 10;
// b = "aaaa";
// console.log("b-value", b);

/**
 * Arimetic
 */
// const a = 2;
// const b = "8";

// console.log("result ", a + b);
// console.log("result ", a - b);

// console.log("result ", b + a);
// console.log("result ", b - a);

// console.log("result ", a * b);
// console.log("result ", a / b);

/**
 * condition
 */

// const a = 1;
// const b = 1;

// if (a == b) {
//   console.log("equal");
// }

// const numberOne = 11;
// const stringOne = "11";

// if (numberOne === stringOne) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (numberOne !== stringOne) {
//   console.log("true");
// } else {
//   console.log("false");
// }

/**
 * Array basic
 */

// const c = [1, 2, 3, 4, 5];
// console.log("c-value", c);

// c.push(6);
// console.log("c-value", c);
// c.pop();
// c.pop();
// console.log("c-value", c);
// c.splice(2, 1);
// console.log("c-value", c);

/**
 * declarative
 * iterate data
 */
// for (let i = 0; i < c.length; i++) {
//   console.log("index = " + i + "  value = " + c[i]);
// }

// for (const element of c) {
//   console.log("element value " + element);
// }

// for (let i = 0; i < c.length; i++) {
//   const element = c[i];
//   console.log("element value " + element);
// }

/**
 * Object data type
 */
// const objectData = {
//   name: "E-jae",
//   year: 1,
// };
// console.log("name  " + objectData.name);
// console.log("name  " + objectData["year"]);

/**
 * Array of object
 */

// const student = [
//   {
//     name: "E-jae-1",
//     year: 1,
//   },
//   {
//     name: "aaaa",
//     year: 2,
//   },
// ];

// console.log("student-info  " + student[0].name);

/**
 * Function
 */

// function printHello() {
//   console.log("Hello world");
// }

// printHello();

// function add(a, b) {
//   console.log("add " + (a + b));
//   return a + b;
// }
// const result = add(1, 2);
// console.log("result" + result);

/**
 * Composition function
 */

// function multiply(a, b, callbackFunction) {
//   console.log("call Mutiply\n");
//   console.log("a = ", a);
//   console.log("b = ", b);
//   const result = a * b;
//   console.log("result = ", result);
//   callbackFunction(result);
//   console.log("\n");
// }

// function printData(data) {
//   console.log("\n");

//   console.log("call printData \n");
//   console.log("data value  " + data);
// }

// multiply(2, 3, printData);

/**
 * Currying
 */

// function add(a) {
//   console.log("a = ", a);
//   return function (b) {
//     console.log("b = ", b);

//     console.log("a = ", a, ",  b = ", b);
//     return a + b;
//   };
// }
// const carryOne = add(1);
// console.log("carrayOne ", carryOne);
// const result = carryOne(2);
// console.log("result ", result);

// const result = add(1)(2);
// console.log("result ", result);

/**
 * Arraw funciton
 */
// const add  = (a) => (b) => a + b

// const add = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

// const result = add(1)(2);
// console.log("result = ", result);

/**
 * Impure function
 */

// the side effect after call a function which change value of global variable
// let a = 1;

// function impure(b) {
//   a++;
//   return a + b;
// }

// console.log(impure(2));
// console.log(impure(2));

/**
 * pure function
 */
// const a = 1;
// function add(b) {
//   return a + b;
// }

// console.log(add(2));
// console.log(add(2));

/**
 * Funtor
 */

// Map data
// const arr = [1, 2, 3, 4];
// const newArray = [];
// for (const element of arr) {
//   newArray.push(element * element);
// }
// console.log("new Array", newArray);
// console.log("array", arr);

// const arr = [1, 2, 3, 4];
// const newArray = arr.map((el) => el * el);

// console.log("new Array", newArray);
// console.log("array", arr);

// Filter data
// const arr = [1, 2, 3, 4];

// const evenNumbers = arr.filter((el) => el % 2 === 0);

// console.log(evenNumbers);

// const arr = [1, 2, 3, 4];
// // const filterEven = (el) => el % 2 === 0;

// function filterEven(el) {
//   return el % 2 === 0;
// }

// const evenNumbers = arr.filter(filterEven);

// console.log(evenNumbers);

// Reduce data
// const arr = [6, 7, 8, 9];

// const sumData = arr.reduce((pre, cur) => pre + cur, 0);

// 0 + 6
// 6 + 7 => 13
// 13 +  8 => 21
// 21 + 9 => 30

// console.log(sumData);

// Some function

// const arr = [1, 2, 3, 4];

// const evenNumber = (el) => el % 2 === 0;
// const isEvenSome = arr.some(evenNumber);
// const isEvenEvery = arr.every(evenNumber);
// console.log(isEvenSome);
// console.log(isEvenEvery);

// const set = new Set([1, 2, 2, 2, 3]);
// const array = Array.from(set);

// Include function
// const arr = [1, 2, 3, 4];

// const isIncludeOne = arr.includes(1);
// console.log(isIncludeOne);

// indexOf

// const arr = [1, 2, 3, 4];

// const indexOfThree = arr.indexOf(3);
// console.log(indexOfThree);

/**
 * Object data type
 */

// const student = {
//   name: "Tar",
//   year: 4,
// };

// console.log(student);
// adding new key

// student["age"] = 22;
// console.log(student);

// removing key
// delete student["name"];
// console.log(student);

// Object.keys(student).forEach((key) => {
//   console.log("key = ", key);
//   console.log("value = ", student[key]);
// });

// const customer = {
//   name: "Pho",
//   lastname: "aaaa",
//   age: 100,
// };

// const hasAgeKey = Object.keys(customer).includes("age");
// console.log(Object.keys(customer), hasAgeKey);

const students = [
  {
    name: "a",
    age: 12,
  },
  {
    name: "b",
    age: 13,
  },
  {
    name: "c",
    age: 14,
  },
  {
    name: "d",
    age: 20,
  },
  {
    name: "2",
    age: 21,
  },
];

// find avg of age, more than 15

const studentAges = students.map((student) => student.age);
const avg = studentAges.reduce((pre, cur) => pre + cur, 0) / studentAges.length;

const listAgesMoreThanFifteen = students.filter((student) => student.age > 15);
const listNamesAreChar = students.filter((student) =>
  isNaN(Number(student.name))
);
console.log("avg", avg);
console.log("listAgesMoreThanFifteen", listAgesMoreThanFifteen);
console.log("listNamesAreChar", listNamesAreChar);
