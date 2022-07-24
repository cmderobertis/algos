// Square each value in a given array, returning that same array with changed values.

var arr = [1,2,3,4,5]

// create function with array argument
function squareArrayVals(array) {
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // reassign current element with the square of itself
        array[i] = array[i] * array[i]
    }
    // return array
    return array
}

console.log(squareArrayVals(arr))
