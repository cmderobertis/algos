function sum1(num) {
  let result = 0;
    for (var i = 0; i < num; i++) {
        result += 1
    }
    return result
}

//The function above runs in linear time.
//If I summed up the numbers between 1 and 1000, it would take about 10 times longer than summing 1 through 100.

function sum2(num) {
  return (num * (num + 1)) / 2
}

//The function above runs in constant time. 3 calculations are needed to calculate the sum of the numbers between 1 and 'num', no matter the size of num. It's way more efficient than the first function.

//What about the opposite direction? Could we write purposefully inefficient functions?
//I'm so glad you asked.

//The function below recursively calculates the fatorial of a number. It runs in linear time.
function factorial(num) {
  if (num == 1) return 1
  return num * factorial(num - 1)
}

//The function below prints out each positive integer 1 through the factorial of 'num'. It runs in factorial time.
function printOneToFactorial(num) {
  for (let i = 1; i <= factorial(num); i++) {
    console.log(i)
  }
}

//To grasp the implications of this, here's an example:
//printOneToFactorial(3)
//prints 1 through 6
//printOneToFactorial(6)
//prints 1 through 720
//printOneToFactorial(9)
//prints 1 through 362,880. Wow.

//In factorial time, functions with larger inputs take incredibly longer to 


//prints the factorial of the factorial of 4
console.log(factorial(9))
// --> prints 6.204484017332394e+23


// The line above prints all positive integers from 1 to 6.204484017332394e+23
// printOneToFactorial(factorial(4))

//I ran the line above for 10.5 minutes, and the last integer printed was 52862934.

//If I had continued at that same pace let the code run to completion, it would have taken 234 billion years...

// O(n!!)