function printIntsAndSum0toN(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        console.log(i)
        sum += i
        console.log(sum)
    }
}

printIntsAndSum0toN(255)