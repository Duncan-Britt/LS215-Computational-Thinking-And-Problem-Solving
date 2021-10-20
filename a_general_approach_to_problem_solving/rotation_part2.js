function mod(a, b) {
  return (a % b + b) % b;
}

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

console.log(rotateRightmostDigits(735291, 1)      === 735291);
console.log(rotateRightmostDigits(735291, 2)      === 735219);
console.log(rotateRightmostDigits(735291, 3)      === 735912);
console.log(rotateRightmostDigits(735291, 4)      === 732915);
console.log(rotateRightmostDigits(735291, 5)      === 752913);
console.log(rotateRightmostDigits(735291, 6)      === 352917);
