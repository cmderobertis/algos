// Given a gap g, starting interger m and ending interger n, return the first pair of prime numbers with the specified gap between them. If no such pair exists, return null.

// Example: primeGap(2, 3, 10) returns [3, 5]

function primeGap(g, m, n) {
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }
  let current = m
  let count = 0
  let firstPrime = null
  while (current < n) {
    if (isPrime(current)) {
      if (firstPrime && count === g) return [firstPrime, current]
      firstPrime = current
      count = 0
    }
    count++
    current++
  }
  return null
}

console.log(primeGap(2, 3, 10)) // [3, 5]
console.log(primeGap(2, 100, 110)) // [101, 103]
console.log(primeGap(4, 100, 110)) // [103, 107]
console.log(primeGap(6, 100, 110)) // null
console.log(primeGap(8, 300, 400)) // [359, 367]
console.log(primeGap(10, 300, 400)) // [337, 347]
