function valid(triangle) {
  if (triangle.some(side => side <= 0)) return false;

  triangle = [...triangle];
  const longest = Math.max(...triangle);
  triangle.splice(triangle.indexOf(longest), 1);

  return triangle.reduce((acc, side) => acc + side) > longest;
}

function triangle(...sides) {
  if (!valid(sides)) return "invalid";

  if (sides[0] === sides[1] && sides[0] === sides[2]) return 'equilateral';
  if (sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[0]) {
    return 'scalene';
  }

  return 'isosceles';
}

console.log(triangle(3, 3, 3)        === "equilateral");
console.log(triangle(3, 3, 1.5)      === "isosceles");
console.log(triangle(3, 4, 5)        === "scalene");
console.log(triangle(0, 3, 3)        === "invalid");
console.log(triangle(3, 1, 1)        === "invalid");
