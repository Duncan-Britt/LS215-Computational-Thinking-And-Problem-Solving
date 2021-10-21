/*
  get middle index of array
  - Math.floor(arr.length / 2);
  compare element to array element at middle index;
  set upper bound to middle index, or lower bound
  repeat lines 2 to X until element is found

  set lower bound to 0, upper bound to arr length - 1;
  get middle between lower and upper bound
  - Math.floor(upper - lower / 2);
  compare element to array element at middle index;
  if lement is less than, reset upper bound,
  if more than, reset lower bound TO MIDDLE +- 1;
*/

function binarySearch(arr, e) {
  let lower = 0;
  let upper = arr.length - 1;
  let mid = Math.floor((upper - lower) / 2);
  let i = 0;
  let lastMid;
  
  while (mid !== lastMid && i++ < 10) {
    if (e === arr[mid]) {
      return mid;
    } else if (e < arr[mid]){
      lastMid = mid;
      if (mid === lower + 1) {
        mid -= 1;
      } else {
        mid -= Math.floor((mid - lower) / 2);
      }
    } else {
      lastMid = mid;
      if (mid === upper - 1) {
        mid += 1;
      } else {
        mid += Math.floor((upper - mid) / 2);
      }
    }
  }

  return - 1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(
binarySearch(yellowPages, 'Pizzeria')                   === 7,
'\n',
binarySearch(yellowPages, 'Apple Store')                === 0,
'\n',

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)    === -1,
'\n',
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)    === 7,
'\n',
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)     === 1,
'\n',

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')  === -1,
'\n',
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')  === 6
);
