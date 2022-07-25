// The Math Library
    // part of the standard JavaScript libraries

// console.log(Math.random())

function d(n) {
    return roll = Math.floor(Math.random() * n) + 1
}

for (let i = 0; i < 100; i++) {
    // console.log(d(20))
}

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

function magic8Ball(question) {
    let randIndex = Math.floor(Math.random() * lifesAnswers.length)
    console.log(`You asked: ${question}`)
    
    return lifesAnswers[randIndex]
}

console.log(magic8Ball('Should I have pizza for dinner?'))