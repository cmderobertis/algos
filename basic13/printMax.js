function printMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}

console.log(printMax([1, 45, 2, -7, 6, 0]))