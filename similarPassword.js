// Given a string of even length, return the least number of steps it would take (of incrementing or decrementing any letter alphabetically [no wrap-arounds]) to transform the sting into one with an equal amount of vowels and consonants.

function similarPassword(password) {
  class Node {
    constructor(data) {
      this.data = data
      this.next = null
      this.prev = null
    }
  }
  class DLL {
    constructor() {
      this.head = null
      this.tail = null
    }
  }
  const alph = new DLL()
  let lphString = "bcdefghijklmnopqrstuvwxyz"
  const aNode = new Node("a")
  alph.head = aNode
  alph.tail = aNode
  for (const c of lphString) {
    const node = new Node(c)
    alph.tail.next = node
    node.prev = alph.tail
    alph.tail = node
  }
  // console.log(alph.head.next.data)
  const vowelObj = { a: 1, e: 1, i: 1, o: 1, u: 1 }
  const isVowel = (letter) => vowelObj[letter]
  let cons = 0
  let vowels = 0
  for (const letter of password) {
    if (isVowel(letter)) {
      vowels++
    } else {
      cons++
    }
  }
  if (vowels === cons) return 0
  const target = password.length / 2
  if (vowels > cons) {
    return vowels - target
  } else {
    const consToChange = cons - target
    const transformArray = []
    for (const letter of password) {
      let incSteps = 0
      let decSteps = 0
      if (!isVowel(letter)) {
        let runner = alph.head
        //counting steps to letter from closest vowel
        while (runner.data !== letter) {
          if (isVowel(runner.data)) {
            decSteps = 0
          }
          decSteps++
          // console.log(decSteps)
          runner = runner.next
        }
        //counting steps to vowel after letter
        while (!isVowel(runner.data)) {
          if (runner) {
            incSteps++
            // console.log(incSteps)
            runner = runner.next
          } else {
            incSteps += 26
            break
          }
        }
        // console.log({ incSteps, decSteps })
        transformArray.push(Math.min(incSteps, decSteps))
        // console.log(transformArray)
      }
    }
    const sortedArray = transformArray.sort()
    const smallestSteps = sortedArray.slice(0, consToChange)
    let minSteps = 0
    for (const steps of smallestSteps) {
      minSteps += steps
    }
    return minSteps
  }
}

console.log(similarPassword("brandonishbbbb")) // 4
console.log(similarPassword("aabb")) // 0
console.log(similarPassword("aaaa")) // 2
