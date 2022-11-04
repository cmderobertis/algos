//Given an array of integers, return an array of the k most frequent values.
function findFreqiest(arr, k) {
  let freqs = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[`${arr[i]}`] = 1
    } else {
      obj[`${arr[i]}`]++
    }
  }
  for (let j = 0; j < k; j++) {
    let max = Object.keys(obj)[0]
    for (let numK in obj) {
      let freq = obj[numK]
      if (freq > obj[max]) max = numK
    }
    freqs.push(max)
    delete obj[max]
  }
  return freqs
}

console.log(findFreqiest([1, 1, 1, 2, 2, 3], 2))
console.log(findFreqiest([1, 1, 1, 2, 2, 3], 1))
console.log(
  findFreqiest([4, 9, 9, 2, 4, 1, 6, 4, 7, 9, 3, 8, 3, 4, 6, 7, 8, 5, 33], 3)
)
