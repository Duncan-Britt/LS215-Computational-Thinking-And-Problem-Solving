function totalArea(rectangles) {
  return rectangles.reduce((acc, rectangle) => {
    return acc + (rectangle[0] * rectangle[1]);
  }, 0)
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let squareas = squares.map(square => square[0] * square[1]);
  return squareas.reduce((area, squarea) => {
    return area + squarea;
  }, 0);
}

console.log(totalSquareArea(rectangles));    // 121
