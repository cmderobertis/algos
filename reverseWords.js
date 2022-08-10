function reverseWords(str) {
  str += ' '
  let out = ''
  let word = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      word += str[i]
    } else {
      if (out) {
        out += ' '
      }
      const revWord = (word) => {
        newWord = ''
        for (let i = word.length - 1; i >= 0; i--) {
          newWord += word[i]
        }
        return newWord
      }
      out += revWord(word)
      word = ''
    }
  }
  return out
}

console.log(reverseWords('hello world'))
console.log(reverseWords('my neighbor is a really good electrician'))
console.log(reverseWords('lol'))
console.log(reverseWords('facebook'))