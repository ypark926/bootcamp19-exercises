// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = x => {
  return 3 * x
};

Array.prototype.map = function(fun) {
  const mapped = []
  for (let el of this) {
    mapped.push(fun(el))
  }
  return mapped
};

console.log(arr.map(triple));
