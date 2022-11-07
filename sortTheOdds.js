function sortTheOdds(array) {
  const oddCache = []
  const placeholder = array.map((n) => {
    if (n % 2 !== 0) {
      oddCache.push(n)
      return "odd"
    }
    return n
  })
  oddCache.sort((a, b) => a - b)
  return placeholder.map((n) => {
    if (n === "odd") {
      return oddCache.shift()
    }
    return n
  })
}

console.log(sortTheOdds([3, 4, 1, 2, 2, 3, 9, 13, 14, 8, 11]))
console.log(sortTheOdds([5, 3, 1, 8, 0]))
console.log(sortTheOdds([5, 3, 2, 8, 1, 4]))
console.log(sortTheOdds([]))
