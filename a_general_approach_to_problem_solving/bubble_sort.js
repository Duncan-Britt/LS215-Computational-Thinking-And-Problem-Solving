/*
store left and right indexes
iterate over array until right is last index, then set
- left to 0;
- right to 1;


*/

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;

    let left = 0;
    let right = 1;
    while (right < array.length) {
      if (array[left] > array[right]) {
        [ array[left], array[right] ] = [array[right], array[left]];
        swapped = true;
      }
      left += 1;
      right += 1;
    }

  } while(swapped);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
