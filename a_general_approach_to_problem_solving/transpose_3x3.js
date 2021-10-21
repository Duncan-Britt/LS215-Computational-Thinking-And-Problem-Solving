function transpose(matrix) {
  let newMatrix = [[], [], []];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
