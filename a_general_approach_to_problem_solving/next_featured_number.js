/*
odd number that is multiple of 7, with unique digits

n % 2 === 1 => odd
n % 7 === 0 => multiple of 7
n ??? => unique

next multiple of 7 = n + 7 - (n % 7)

algorithm:
- guard clause to ensure its not greater than the largest feature number
- get next multiple of 7
- loop
  - increment number by 7 until number is a feature number

- How to tell if a number is a feature number:
  - must be odd
  - must be mutliple of 7 (redundant)
  - must have unique characters
    - split number into array of digits
    - store array of prev digits
    - iterate over digits, appending them to prev digits
    - if any digit is already included in previous, its not a unique number
*/

function isUnique(array) {
  const prev = [];
  for (let i = 0; i < array.length; i++) {
    if (prev.includes(array[i])) return false;
    prev.push(array[i]);
  }
  return true;
}

function isFeatureNumber(n) {
  // if (n % 2 === 0) return false;
  // if (n % 7 !== 0) return false; // redundant
  let digits = String(n).split('');
  return isUnique(digits);
}

function featured(n) {
  if (n >= 9876543201) return "There is no possible number that fulfills those requirements."

  let multipleOf7 = n + 7 - (n % 7);
  if (multipleOf7 % 2 === 0) multipleOf7 += 7;
  while (!isFeatureNumber(multipleOf7)) {
    multipleOf7 += 14;
  }

  return multipleOf7;
}

console.log(featured(12)           === 21);
console.log(featured(20)           === 21);
console.log(featured(21)           === 35);
console.log(featured(997)          === 1029);
console.log(featured(1029)         === 1043);
console.log(featured(999999)       === 1023547);
console.log(featured(999999987)    === 1023456987);
console.log(featured(9876543186)   === 9876543201);
console.log(featured(9876543200)   === 9876543201);
console.log(featured(9876543201)   === "There is no possible number that fulfills those requirements.");
