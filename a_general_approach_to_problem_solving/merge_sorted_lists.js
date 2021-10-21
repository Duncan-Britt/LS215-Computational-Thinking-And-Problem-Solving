/*
Must work for empty arrays
must not sort after merging

iterate through left and right arrays until the one of the two arrays
has been iterated through

append remaining elements from the other array
*/

function merge(left, right) {
  const newArray = [];
  let ldx = 0;
  let rdx = 0;
  while (ldx < left.length && rdx < right.length) {
    if (left[ldx] < right[rdx]) {
      newArray.push(left[ldx]);
      ldx += 1;
    } else {
      newArray.push(right[rdx]);
      rdx += 1;
    }
  }

  while (ldx < left.length) {
    newArray.push(left[ldx++]);
  }

  while (rdx < right.length) {
    newArray.push(right[rdx++]);
  }

  return newArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
