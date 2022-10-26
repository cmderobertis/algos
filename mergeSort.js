//Merge sort using recursion
function mergeSort(unsortedArray) {
  if (unsortedArray.length == 1) return unsortedArray
  //divide the array in whatever halfpoint is
  //use Math.floor to find whole number/avoid float
  const midPoint = Math.floor(unsortedArray.length / 2)
  //get the left side of the array
  const leftArr = unsortedArray.slice(0, midPoint)
  // find right side from midpoint to end (no need to specify end of the array)
  const rightArr = unsortedArray.slice(midPoint)

  //merge the two arrays using recursion to keep partitioning
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
//Merge two arrays
function merge(leftArr, rightArr) {
  //get array where we push values from the both array
  let resultArray = []
  //set two indexex to keep track of the position of left and right array
  //we'll move from the smallest number to the largest.
  let leftIndex = 0
  let rightIndex = 0

  //keep merging as long as there's still numbers from any of the array unadded
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    //If  value of the left array is lower
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      // we add it to the result
      resultArray.push(leftArr[leftIndex])
      console.log({ resultArray })
      leftIndex++ //Since we added the value from left index, lets increment it.
    } //else add in the value of the right array.
    else {
      resultArray.push(rightArr[rightIndex])
      console.log({ resultArray })
      rightIndex++ //after adding the value from right index, lets increment it.
    }
  }
  //but once one side is all finished, the other array is untouched
  //lets start by checking if it's the left side undefined and add it to the result
  // if there are value in left array or if it's not empty
  if (leftArr[leftIndex]) {
    //we push the unadded elements using the spread operator
    resultArray.push(...leftArr.slice(leftIndex))
  } //if it's not left, then it's for sure the right array
  else {
    //we push in the unadded elements using the spread operator
    resultArray.push(...rightArr.slice(rightIndex))
  }
  return resultArray
}

console.log(mergeSort([13, 457, 33, 560, 9, 87, 4, 100, 65]))
console.log(mergeSort([13, 457, 33, 9, 87, 4, 100, 65]))
