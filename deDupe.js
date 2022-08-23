function deDupe(arr) {
  let i = 0
  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      delete arr[i]
    } else {
      i++
    }
  }
  return arr
}

console.log(deDupe([1,2,3,4,5]))
console.log(deDupe([1,1,2,2,3,3,3]))
