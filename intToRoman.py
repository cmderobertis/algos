from collections import OrderedDict
def integerToRoman(int:int) -> str:
  val = int
  od = OrderedDict()
  od["M"] = 1000
  od["CM"]= 900
  od["D"]= 500
  od["CD"]= 400
  od["C"]= 100
  od["XC"]= 90
  od["L"]= 50
  od["XL"]= 40
  od["X"]= 10
  od["IX"]= 9
  od["V"]= 5
  od["IV"]= 4
  od["I"]= 1
  out = ""
  for k,v in od.items():
    while v <= val:
      val -= v
      out += k
  return out

print(integerToRoman(10))
print(integerToRoman(9001))
print(integerToRoman(42))
print(integerToRoman(1776))