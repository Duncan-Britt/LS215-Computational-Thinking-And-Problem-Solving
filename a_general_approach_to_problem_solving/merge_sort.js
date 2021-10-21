/*
IF the array passed to mergeSort is of size 1 or less, return the array;

split arr into left and right halves
- Math floor arr size / 2 = middle index
  - arr size 3 => middle index is 1
- left half is 0 to middle inclusive
- right half is middle + 1 to end;

merge sort left half
merge sort right half

return: merge left and right halves
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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
