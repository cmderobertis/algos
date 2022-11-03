// function forWhomTheBallFalls(grid) {
//   let expected = []
//   for (let col = 0; col < grid[0].length; col++) {
//     let prevMatch
//     for (let row = 0; row < grid.length; row++) {
//       if (grid[row][col] === grid[row][col + 1]) {
//         if (!prevMatch || prevMatch === -grid[row][col]) {
//           prevMatch = grid[row][col]
//           continue
//         }
//       }
//     }
//   }
//   return expected
// }
function forWhomTheBallFalls(grid) {
  let expected = []
  for (let col = 0; col < grid[0].length; col++) {
    let row = 0
    let modifier = 0
    let stuck = false
    while (row < grid.length) {
      let cell = grid[row][col + modifier]
      let right =
        col + modifier < grid[0].length - 1
          ? grid[row][col + modifier + 1]
          : null
      let left = col + modifier > 0 ? grid[row][col + modifier - 1] : null
      //going to the left
      if (cell === -1) {
        if (!left) {
          expected.push(-1)
          stuck = true
          break
        }
        if (cell !== left) {
          expected.push(-1)
          stuck = true
          break
        }
        modifier--
      }
      //going to the right
      else {
        if (!right) {
          expected.push(-1)
          stuck = true
          break
        }
        if (cell != right) {
          expected.push(-1)
          stuck = true
          break
        }
        modifier++
      }
      row++
    }
    if (!stuck) {
      expected.push(col + modifier)
    }
  }
  return expected
}

const grid1 = [
  [1, 1, -1, -1],
  [-1, -1, 1, -1],
  [1, 1, -1, -1],
  [-1, 1, 1, 1],
]

console.log(forWhomTheBallFalls(grid1))
