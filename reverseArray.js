function reverse(arr) {
    for (let l = 0; l < Math.floor(arr.length/2); l++) {
        let r = arr.length - 1 - l
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
    }
    return arr
}

let nums = [1,2,3,4,5]
console.log(reverse(nums))