function validParens(str) {
  let cache = []
  for (let i = 0; i < str.length; i++) {
    if (['(', '[', '{'].includes(str[i])) {
      cache.push(str[i])
    }
    if ([')', ']', '}'].includes(str[i])) {
      if (cache.length < 1) return false
      last = cache.pop()
      if (last == '(' && str[i] != ')') return false
      if (last == '[' && str[i] != ']') return false
      if (last == '{' && str[i] != '}') return false
    }
  }
  if (cache.length > 0) return false
  return true
}
console.log(validParens('weh([)]gaeg(ga(sg)sh)'))
console.log(validParens('weh())gaeg(ga(sg)sh)'))
console.log(validParens('weh))gaeg(ga(sg)sh)'))
console.log(validParens('weh(fgw(9099))gaeg(ga(sg)sh)'))




