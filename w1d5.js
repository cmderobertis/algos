// Arrays
    // a datatype that can hold a collection of values (essentially an ordered list)
    // it is a "reference datatype"
        // a pointer to a location in memory

let colors = ['red', 'blue', 'green', 'yellow']

// Get and set values using bracket notation

console.log(colors[1]) // <-- logs 'blue'

colors[2] = 'purple'
colors[0] = colors[1]
console.log(colors)

// .push() add an element to the end and returns the new length
colors.push('black')
console.log(colors)

// .pop() remove last element and return that element
colors.pop()
console.log(colors)
let poppedColor = colors.pop()
console.log(colors)
console.log(poppedColor)