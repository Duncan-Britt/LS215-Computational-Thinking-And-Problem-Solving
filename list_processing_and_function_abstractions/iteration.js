function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

function myFilter(array, func) {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) filteredArray.push(array[i]);
  }

  return filteredArray
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let a = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
console.log(a);

function myMap(array, func) {
  let result = [];

  array.forEach((element, idx, array) => {
    result.push(func(element, idx, array));
  });

  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
