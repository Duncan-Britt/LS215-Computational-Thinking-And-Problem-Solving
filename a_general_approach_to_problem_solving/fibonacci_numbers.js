function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(counter, n = 1, previous = [1]) {
  if (counter === 1) return n;

  const lastIdx = previous.length - 1;
  n = previous[lastIdx] + (previous[lastIdx - 1] || 0);

  return fibonacci(counter - 1, n, previous.concat(n));
}

// function fibonacci(counter) {
//   if (counter === 1) return 1;
//
//   let previous = [1];
//   let n;
//
//   for (; counter > 1; counter -= 1) {
//     const lastIdx = previous.length - 1;
//     n = previous[lastIdx] + (previous[lastIdx - 1] || 0);
//     previous.push(n);
//   }
//
//   return n;
// }

console.log(fibonacci(1)       === 1);
console.log(fibonacci(2)       === 1);
console.log(fibonacci(3)       === 2);
console.log(fibonacci(4)       === 3);
console.log(fibonacci(5)       === 5);
console.log(fibonacci(12)      === 144);
console.log(fibonacci(20)      === 6765);

console.log(fibonacci(20)       === 6765);
console.log(fibonacci(50)       === 12586269025);
console.log(fibonacci(75)       === 2111485077978050);
