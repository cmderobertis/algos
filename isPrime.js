function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

console.log(isPrime(3))
console.log(isPrime(17))
console.log(isPrime(4))
console.log(isPrime(111))
console.log(isPrime(121))
console.log(isPrime(2))
console.log(isPrime(1))
