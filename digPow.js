// Given positive integers n and p, return integer k, such that each digit of n, raised to the power of p, p+1, p+2... and added together, equals n * k. If k does not exist, return -1.
// Ex: n = 89, p = 1
// 8^1 + 9^2 = 89 * 1
// Output: k = 1

function digPow(n, p) {
  let nSplit = n
    .toString()
    .split("")
    .map((str) => parseInt(str))
  console.log(nSplit)
  powSum = 0
  for (let i = 0; i < nSplit.length; i++) {
    let pow = i + p
    powSum += Math.pow(nSplit[i], pow)
  }
  return powSum % n == 0 ? powSum / n : -1
}

console.log(digPow(89, 1))
console.log(digPow(46288, 3))
console.log(digPow(92, 1))
