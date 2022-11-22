function determinant(m) {
  let sign = 1
  let out = 0
  if (m.length < 2) return m[0][0]
  for (let i = 0; i < m.length; i++) {
    // mat is everything but top row
    let mat = []
    for (const row of m) mat.push([...row])
    mat = mat.slice(1)
    //splice each row of mat accoring to i
    for (const row of mat) {
      row.splice(i, 1)
    }
    let factor1 = m[0][i]
    let factor2 = determinant(mat)
    out += factor1 * factor2 * sign
    sign *= -1
  }
  return out
}

let m1 = [[2]]
let m2 = [
  [2, 3],
  [7, 1],
]
let m3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let m5 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
]

console.log(determinant(m1), determinant(m1) === 2)
console.log(determinant(m2), determinant(m2) === -19)
console.log(determinant(m5), determinant(m5) === 10)
