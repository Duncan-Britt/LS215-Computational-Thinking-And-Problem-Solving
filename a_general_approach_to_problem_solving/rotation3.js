function rotateArray(array) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return array;

  const newArr = array.slice(1);
  newArr.push(array[0]);
  return newArr;
}

function rotateRightmostDigits(number, nDigits) {
  const digits = String(number).split('');
  const len = digits.length
  const left = digits.slice(0, len - nDigits);
  let right = digits.slice(len - nDigits, len);
  return Number(left.concat(rotateArray(right)).join(''));
}

function maxRotation(number) {
  const len = String(number).length;

  let counter = len;
  while (counter > 1) {
    number = rotateRightmostDigits(number, counter);
    counter -= 1;
  }
  return number;
}

console.log(maxRotation(735291)          === 321579);
console.log(maxRotation(3)               === 3);
console.log(maxRotation(35)              === 53);
console.log(maxRotation(105)             === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146)      === 7321609845);
