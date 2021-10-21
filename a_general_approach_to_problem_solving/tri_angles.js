/*
INput: 3 angles;
output: string representing
- acute
- right
- obstuse
- invalid



VALIDATE TRIANGLE
  reduce angles to sum, check that its 180
  ensure no angle is 0 or less

IF ANY ANGLE IS 90, return 'right';
IF ANY ANGLE IS GREATER THAN 90, RETURN 'Obtuse'
Iterate through angles - for loop
  check whether each is 90
  check whether each is greater than 90

RETURN 'acute'
*/

function triangle(...angles) {
  if (angles.reduce((acc, n) => acc + n) !== 180) return 'invalid';
  if (angles.some(n => n <= 0)) return 'invalid';

  for (let i = 0; i < angles.length; i++) {
    if (angles[i] === 90) return 'right';
    if (angles[i] >= 90) return 'obtuse';
  }

  return 'acute';
}

console.log(triangle(60, 70, 50)       === "acute");
console.log(triangle(30, 90, 60)       === "right");
console.log(triangle(120, 50, 10)      === "obtuse");
console.log(triangle(0, 90, 90)        === "invalid");
console.log(triangle(50, 50, 50)       === "invalid");
