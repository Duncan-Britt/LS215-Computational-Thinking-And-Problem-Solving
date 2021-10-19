'use strict';

function p(grid) {
  grid.forEach(row => {
    console.log(row.join(' '));
  });
}

function railDecode(grid) {
  let rowIncrement = 1;
  let nRows = grid.length;
  let nColumns = grid[0].length;
  let limit = Math.max(nRows, nColumns);
  const co = {
    row: 0,
    column: 0,
    limitingFactor: limit === nRows ? 'rows' : 'column',
  };

  let result = '';
  while (co[co.limitingFactor] < limit) {
    result += grid[co.row][co.column];
    if (grid[co.row + rowIncrement] === undefined) rowIncrement *= -1;
    co.row += rowIncrement;
    co.column += 1;
  }
  return result;
}

function makeGrid(encodedMessage) {
  const lines = encodedMessage.split('\n');
  const grid = lines.map(row => row.match(/\S/g));
  return grid;
}


const MESSAGE = 'WE ARE DISCOVERED fLEE AT ONCE';

function sparseMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray
}

function decode(encodedMessage) {
  const grid = makeGrid(encodedMessage);
  return railDecode(grid);
}

function encode(message, nRails) {
  message = message.toUpperCase();
  message = message.match(/[A-Z]/g)

  const grid = [];
  let rowIncrement = -1;
  let nRows = nRails;
  let row = 0;
  let column = 0;

  message.forEach(letter => {
    grid[row] = grid[row] || [];
    grid[row][column] = letter;
    if (row === nRails - 1 || row === 0) rowIncrement *= -1;
    row += rowIncrement;
    column += 1;
  });

  const filledGrid = sparseMap(grid, row => {
    return sparseMap(row, e => {
      return e || '.'
    });
  });

  function fillNum(row) {
    let maxLen = 0;
    filledGrid.forEach(row => {
      if (row.length > maxLen) maxLen = row.length;
    });
    return maxLen - row.length;
  }

  const filledRows = filledGrid.map(row => {
    return row.join(' ') + ' .'.repeat(fillNum(row));
  });

  return filledRows.join('\n');
}

const ENCODED_MESSAGE = 'W . . . E . . . C . . . R . . . L . . . T . . . E\n' +
                        '. E . R . D . S . O . E . E . F . E . A . O . C .\n' +
                        '. . A . . . I . . . V . . . D . . . E . . . N . .'

const ENCODED_FOUR_RAILS = 'W . . . . . I . . . . . R . . . . . E . . . . . E\n' +
                           '. E . . . D . S . . . E . E . . . E . A . . . C .\n' +
                           '. . A . E . . . C . V . . . D . L . . . T . N . .\n' +
                           '. . . R . . . . . O . . . . . F . . . . . O . . .'

console.log(encode(MESSAGE, 3) === ENCODED_MESSAGE);
console.log(encode(MESSAGE, 4) === ENCODED_FOUR_RAILS);

console.log(
  decode(encode(MESSAGE, 5))
);

console.log(
  encode('HELLO world', 5),
  '\n',
  decode(encode('Hello World', 5))
);
