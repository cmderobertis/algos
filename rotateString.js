function rotateWord(str, int) {
  modRemain = int % str.length
  sliceEnd = str.slice(str.length - modRemain)
  sliceStart = str.slice(0, str.length - modRemain)
  return sliceEnd + sliceStart
}

console.log(rotateWord(('Hello world'), 254))
console.log(rotateWord(('Hello world'), 10))
console.log(rotateWord(('Hello world'), 66))
console.log(rotateWord(('Tyler is cool'), 42))
