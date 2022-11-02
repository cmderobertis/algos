function fib(n, memo = {}) {
  if (memo[n]) return memo[n]
  if (n <= 3) return 1
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo)
  return memo[n]
}

console.log(fib(6))
console.log(fib(60))
console.log(fib(100))
console.log(fib(10000))
