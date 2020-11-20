/* 1. Loop through the arrays and print the elements.
2. Loop through the students array and print:
    a. the properties of the objects.
    b. the values of the properties in the objects.
3. Create a loop and print the first 10 numbers.
4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
    a. starting from 0 && using a conditional statement (increase the counter for 1)
5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
    a. starting from 0 && using a conditional statement (increase the counter for 1)
6. Find a way to check the type of the array (except for the typeof command). */

let fruits = ["Apple", "Banana", "Orange"];
let students = [
  {
    firstName: "John",
    lastName: "Doe",
    index: 20201,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    index: 20202,
  },
  {
    firstName: "David",
    lastName: "Vinoth",
    index: 20203,
  },
  {
    firstName: "Divya",
    lastName: "Ishitha",
    index: 20204,
  },
  {
    firstName: "Thomas",
    lastName: "Edgardson",
    index: 20205,
  },
];

// 1. Loop through the arrays and print the elements.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
/* 2. Loop through the students array and print:
     a. the properties of the objects.
     b. the values of the properties in the objects.*/
for (i = 0; i < students.length; i++) {
  for (let prop in students[i]) {
    console.log(prop);
  }
}
for (i = 0; i < students.length; i++) {
  value = students[i];
  for (let prop in value) {
    console.log(value[prop]);
  }
}
// 3. Create a loop and print the first 10 numbers.
for (i = 1; i <= 10; i++) {
  console.log(i);
}
// 4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
for (i = 0; i <= 10; i += 2) {
  console.log(i);
}
//     a. starting from 0 && using a conditional statement (increase the counter for 1)
for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
for (i = 1; i <= 10; i += 2) {
  console.log(i);
}
//     a. starting from 0 && using a conditional statement (increase the counter for 1)
for (i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
// 6. Find a way to check the type of the array (except for the typeof command).

if (fruits.constructor.name == "Array") {
  console.log("It's an array I guess?");
}

console.log(!(fruits instanceof Array));

console.log(Array.isArray(fruits));
