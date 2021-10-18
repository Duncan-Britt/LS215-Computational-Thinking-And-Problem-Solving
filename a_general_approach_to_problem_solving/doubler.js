// validate and transform input into an array
// amp array values to new array
//   different rules for each kind of value

function doubler(input) {
  function doublerValidate(input) {
    if (Array.isArray(input)) {
      const newArray = [];
      for (let key in input) {
        newArray[key] = input[key];
      }

      for (let i = 0; i < newArray.length; i++) {
        if(!(i in newArray)) {
          newArray.splice(i, 1);
          i = -1;
        }
      }
      return newArray;
    } else if (input === null) {
      return false;
    } else if (typeof input === 'object') {
      if (input.constructor === RegExp) return false;
      return Object.values(input);
    } else if (typeof input === 'number') {
      if (isNaN(input)) {
        return false;
      } else if (!isFinite(input)) {
        return false;
      } else if (input < 0) {
        return false;
      } else if (parseInt(input, 10) !== input) {
        return false;
      } else {
        return String(input).split('').map(n => Number(n));
      }

    } else if (typeof input === 'string') {
      return input.split('');
    } else {
      return false;
    }
  }

  function isIndexValue(i) {
    i = Number(i);
    return parseInt(i, 10) === i &&
           isFinite(i) &&
           i >= 0;
  }

  const validArray = doublerValidate(input);
  if (!validArray) return 'Invalid input';

  const result = [];

  for (let key in validArray) {
    if (!isIndexValue(key)) {
      result[key] = validArray[key];
      continue;
    }

    let e = validArray[key];

    if (typeof e === 'number') {
      if (isFinite(e)) e *= 2;
      result.push(e);
    } else if (typeof e === 'string') {
      result.push(e.repeat(2));
    } else {
      result.push(e);
      result.push(e);
    }
  }
  validArray.forEach((e) => {
  });

  return result;
}

// // elements that are numbers should be multiplied by 2
// console.log(doubler([1, 2, 3]));                    // [2, 4, 6]
//
// // elements that are strings should be repeated twice via concatenation
// console.log(doubler(['a', 'b', 'c']));              // ["aa", "bb", "cc"]
//
// // other types of elements should be duplicated in the array
// console.log(doubler([true, false]));                // [true, true, false, false]
// console.log(doubler([null]));                       // [null, null]
// console.log(doubler([undefined]));                  // [undefined, undefined]
// console.log(doubler([[1], []]));                    // [[1], [1], [], []]
// console.log(doubler([{ foo: 'bar' }]));             // [{ foo: "bar" }, { foo: "bar" }]
// console.log(doubler([function foo() {}]));          // [function foo(), function foo()]
// console.log(doubler([/abc/]));                      // [/abc/, /abc/]
//
// // the input array should not be mutated
// let array = [1, 2, 3];
// console.log(doubler(array));                        // [2, 4, 6]
// console.log(array);                                 // [1, 2, 3]
//
// // elements that are special number values should remain unchanged
// console.log(doubler([NaN, Infinity, -Infinity]));   // [NaN, Infinity, -Infinity]
//
// // elements that are any other type of number should be treated normally (multiplied by 2)
// console.log(doubler([0.42, -5, 0, -0]));            // [0.84, -10, 0, -0]
//
// // elements that are empty strings should remain unchanged
// console.log(doubler(['']));                         // [""]
//
// // elements that are any other type of string should be treated normally (repeated twice)
// console.log(doubler([' ', 'aB', '@', '\n', '1']));  // ["  ", "aBaB", "@@", "\n\n", "11"]
//
// // the input array can contain a mixture of different types of elements
// console.log(doubler([1, 'a', true, [], {}]));       // [2, "aa", true, true, [], [], {}, {}]
//
// // non-primitive elements should have their reference duplicated, not their value
// let doubled = doubler([{ a: 'b' }]);
// console.log((doubled[0] === doubled[1])             === true);
//
// // elements that appear more than once should be treated normally (as specified above)
// console.log(doubler([1, 1, true, true, {}, {}]));   // [2, 2, true, true, true, true, {}, {}, {}, {}]
//
// // elements that contain nested arrays or objects should be treated normally (duplicated)
// console.log(doubler([[1, [2, 3], {}]]));            // [[1, [2, 3], {}], [1, [2, 3], {}]]
// console.log(doubler([{ a: [1] }]));                 // [{ a: [1] }, { a: [1] }]
//
// // if the input array contains empty slots (a "sparse array"), they should be removed
// console.log(doubler([1, , 2, , , 3]));              // [2, 4, 6]
//
// // // if an inner array (element) contains empty slots, they should remain unchanged
// console.log(doubler([[1, , , 2]]));                 // [[1, empty × 2, 2], [1, empty × 2, 2]]

// // if the input array contains any object properties, they should remain unchanged
// array = [1, 2];
// array.foo = 'bar';
// console.log(doubler(array));                        // [2, 4, foo: "bar"]
//
// // if an inner array (element) contains any object properties, they should remain unchanged
// array = [1, 2];
// array.foo = 'bar';
// console.log(doubler([array]));                      // [[1, 2, foo: "bar"], [1, 2, foo: "bar"]]
// //
// // if the input array is empty, return an empty array
// console.log(doubler([]));                           // []
// //
// // if multiple arguments are passed, ignore all but the first
// console.log(doubler(['a'], ['b']));                 // ['aa']
// //
// // if the argument is a string, treat it as an array of characters
// console.log(doubler('abc'));                        // ["aa", "bb", "cc"]
// console.log(doubler('123'));                        // ["11", "22", "33"]
// console.log(doubler(''));                           // []
// //
// // if the argument is a non-negative integer, treat it as an array of digits
// console.log(doubler(123));                          // [2, 4, 6]
// console.log(doubler(0));                            // [0]
//
// // if the argument is an object, treat it as an array of its property values
// console.log(doubler({ a: 1, b: 2 }));               // [2, 4]
// console.log(doubler({ a: 'A', b: [] }));            // ["AA", [], []]
// console.log(doubler({}));                           // []
//
// // all other kinds of inputs are invalid, and should return the string 'Invalid input'
// console.log(doubler(-1)                === "Invalid input");
// console.log(doubler(0.42)              === "Invalid input");
// console.log(doubler(Infinity)          === "Invalid input");
// console.log(doubler(NaN)               === "Invalid input");
// console.log(doubler(true)              === "Invalid input");
// console.log(doubler(false)             === "Invalid input");
// console.log(doubler(null)              === "Invalid input");
// console.log(doubler(undefined)         === "Invalid input");
// console.log(doubler(function () {})    === "Invalid input");
// console.log(doubler(/abc/)             === "Invalid input");
// console.log(doubler()                  === "Invalid input");
