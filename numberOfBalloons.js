var maxNumberOfBalloons = function (text) {
  let letterMap = {
    b: 1,
    a: 1,
    l: 1,
    o: 1,
    n: 1,
  }
  for (const c of text) {
    if (letterMap[c]) {
      letterMap[c]++
    }
  }
  letterMap.b--
  letterMap.a--
  letterMap.n--
  letterMap.l = Math.floor((letterMap.l - 1) / 2)
  letterMap.o = Math.floor((letterMap.o - 1) / 2)
  return Math.min(...Object.values(letterMap))
}

const str1 = "abwidladhaflibawieohfhapibapwbpbapibiawbpbapdjlajwjdolaiwadnwoona"
const str2 = "balloon"
const str3 = "boloalbbon"

console.log(maxNumberOfBalloons(str1))
console.log(maxNumberOfBalloons(str2))
console.log(maxNumberOfBalloons(str3))
