// Given an array of integers, return an object representing each local maximum value, in the form {pos: [], peaks: []}, where "pos" is the index and "peaks" is the local maximum value.
//Ex: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}

function pickPeaks(arr) {
  const output = {
    pos: [],
    peaks: [],
  }
  let asc = false
  let hold = null
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      hold = i + 1
      asc = true
    } else if (arr[i] === arr[i + 1]) {
      asc = false
    } else {
      if (hold) {
        output.pos.push(hold)
        output.peaks.push(arr[hold])
        hold = null
        asc = false
      }
    }
  }
  return output
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]))
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]))
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]))
