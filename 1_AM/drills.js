const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  const stringConvert = str.split(" ");

  return stringConvert;
};

const reverse = str => {
  // TODO - write a function which reverses the string
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");

  return joinArray;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  let uniqueArray = Array.from(new Set(arr));

  return uniqueArray;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const splitString = str.split();
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const currentDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = currentDate.getDate();
  const month = (document.getElementById("demo").innerHTML =
    months[currentDate.getMonth()]);
  const year = currentDate.getFullYear();

  console.log(`Today\'s date is ${month} ${date}, ${year}.`);
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
