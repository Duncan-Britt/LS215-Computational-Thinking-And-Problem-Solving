function rotate90(matrix) {
  const newMatrix = [];
  const nRows = matrix.length;
  const nCols = matrix[0].length;

  for (let j = 0; j < nCols; j++) {
    for (let i = 0; i < nRows; i++) {
      newMatrix[j] = newMatrix[j] || [];
      newMatrix[j][nRows - 1 - i] = matrix[i][j];
    }
  }
  
  return newMatrix;
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
