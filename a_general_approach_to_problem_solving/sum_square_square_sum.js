/*
fist step is to get the range of integers in an array, from 1 up to n
- loop
  - append i to array until i > n;

a: reduce set to sum and square sum;
b: reduce set to sum of squares;

return a - b;

*/


function sumSquareDifference(n) {
  const set = [];
  for (let i = 1; i <= n; i++) {
    set.push(i);
  }

  const a = set.reduce((acc, n) => acc + n)**2;
  const b = set.reduce((acc, n) => acc + n**2);
  return a - b;
}

console.log(sumSquareDifference(3) ===       22); // --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) ===      2640); //
console.log(sumSquareDifference(1) ===       0); //
console.log(sumSquareDifference(100) ===     25164150); //
