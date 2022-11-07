// Given a filled in sudoku board (2D array), return a boolean indicating if it is a valid solution (1-9 in every row, column, and 3x3 square).

function sudokuChecker(board) {
  // check that all rows add up to 45
  let sum = 0
  for (const row of board) {
    for (const cell of row) {
      sum += cell
    }
    if (sum !== 45) return false
    sum = 0
  }
  // check that all columns add up to 45
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sum += board[j][i]
    }
    if (sum !== 45) return false
    sum = 0
  }
  // check that all squares add up to 45
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sum += board[j][i]
    }
  }
  if (sum !== 45) return false
  sum = 0
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      sum += board[j][i]
    }
  }
  if (sum !== 45) return false
  sum = 0
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      sum += board[j][i]
    }
  }
  if (sum !== 45) return false
  sum = 0
  return true
}

console.log(
  sudokuChecker([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
)
console.log(
  sudokuChecker([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ])
)
