function sum1(num) {
  let result = 0;
    for (var i = 0; i < num; i++) {
        result += 1
    }
    return result
}

function sum2(num) {
  return (num * (num + 1)) / 2
}

function factorial(num) {
  if (num == 1) return 1
  return num * factorial(num - 1)
}

function printOneToFactorial(num) {
  for (let i = 1; i <= factorial(num); i++) {
    console.log(i)
  }
}

//prints the factorial of the factorial of 4
console.log(factorial(factorial(4)))
// --> prints 6.204484017332394e+23


// The line above prints all positive integers from 1 to 6.204484017332394e+23
// printOneToFactorial(factorial(4))

//I ran the line above for 10.5 minutes, and the last integer printed was 52862934.

//If I had continued at that same pace let the code run to completion, it would have taken 234 billion years...