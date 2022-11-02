from math import trunc

def divide(dividend: int, divisor: int) -> int:
  count = 0
  a = abs(dividend)
  b = abs(divisor)
  negative = (dividend < 0 and divisor > 0) or (dividend > 0 and divisor < 0)
  while a >= b:
    counter = 1
    decrement = b
    while a >= decrement:
      a -= decrement
      count += counter
      counter += counter
      decrement += decrement
  output = -count if negative else count
  return min(max(-2147483648, output), 2147483647)

input1 = 2147483647
input2 = 2
print(divide(input1, input2))
print(divide(input1, input2) == trunc(input1/input2))