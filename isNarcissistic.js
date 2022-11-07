// Given an integer, return if each digit raised to the power of the number of digits, added together, equals the given integer.

// Ex: 153 = 1^3 + 5^3 + 3^3 (returns true)

function isNarcissistic(value) {
  let asString = value.toString()
  let numDigits = asString.length
  let val = 0
  for (const dig of asString) {
    val += dig ** numDigits
  }
  return val === value
}

console.log(isNarcissistic(153)) // true
