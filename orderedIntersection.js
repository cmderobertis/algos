function orderedIntersection(arr1, arr2) {
  let res = []
  let i = 0
  let j = 0
  while (i < arr1.length - 1 && j < arr2.length - 1) {
    if (arr1[i] === arr2[j]) {
      console.log(res)
      console.log(arr1[i])
      if (res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i])
      }
      i++
      j++
    } else {
      if (arr1[i] < arr2[j]) {
        i++
      } else {
        j++
      }
    }
  }
  return res
}

const newArr1 = [1, 2, 2, 3, 4, 5, 5]
const newArr2 = [2, 2, 3, 3, 6, 6, 9]
console.log(orderedIntersection(newArr1, newArr2))
