let arr2d2 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
]

// Arrays within arrays...oooooooo....
    // Access nested values by chaining backet notation

// console.log(arr2d2[0][2]) //<-- logs 8

//  create a function that searches a 2D array for a particular value
    // return a boolean indicating if value is present

function isPresent(arr2d, value) {
    for (let i = 0; i < arr2d.length; i++) {
        // console.log('i: ' + i)
        for (let j = 0; j < arr2d[i].length; j++) {
            // console.log('j: ' + j)
            if (arr2d[i][j] == value) return true
        }
    }
    return false
}
// console.log(isPresent(arr2d2, 4))

// create a function that takes a 2D array, and returns a new array containing just the values inside the sub-arrays of the 2D array

function flatten(arr2d) {
    let newArr = []
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
            newArr.push(arr2d[i][j])
        }
    }
    return newArr
}

console.log(flatten(arr2d2))