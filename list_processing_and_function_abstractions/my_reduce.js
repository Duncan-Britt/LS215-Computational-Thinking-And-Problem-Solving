function myReduce(array, func, initial = array[0]) {
  let index;
  if (initial === array[0]) {
    index = 1;
  } else {
    index = 0;
  }
  let acc = initial;
  array.slice(index).forEach((element, idx) => {
    acc = func(acc, element, idx, array);
  });
  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
