const assert = require("assert");

// Feel free to look things up online!

const reverse = str => {
  const tokenized = str.split("")
  const reversed = tokenized.reverse()
  const joined = reversed.join("")
  return joined
};

const uniqueOnes = arr => {
  // TODO - write a function which removes all non-unique elemenets from an array
  const used = []
  const unique = []
  for (let el of arr) {
    if (!used.includes(el)) {
      unique.push(el)
      used.push(el)
    }
  }
  return unique
};

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  const tokenized = str.split(" ")
  return tokenized
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num > 1) return num * factorial(num - 1)
  return 1
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length !== arr2.length) {
    return -1
  }
  const zipped = []
  for (let i = 0; i < arr1.length; i++) {
    zipped.push([arr1[i], arr2[i]])
  }

  return zipped
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  const unzipped1 = []
  const unzipped2 = []
  for (let el of arr) {
    unzipped1.push(el[0])
    unzipped2.push(el[1])
  }
  return [unzipped1, unzipped2]
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let shifted = str
  for (let i = 0; i < num; i++) {
    const chars = shifted.split("")
    const head = chars.shift()
    shifted = [...chars, head].join("")
  }
  return shifted
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
