function reverse(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let j = arr.length - 1 - i
        newArr[i] = arr[j]
    }
    return newArr
}

console.log(reverse([1,2,3,4]))