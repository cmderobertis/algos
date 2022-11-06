//Given number of seconds, return time elapsed in the human readable format HH:MM:SS

function timeFormatFromSeconds(seconds) {
  let output = ""
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  output += hours < 10 ? `0${hours}:` : `${hours}:`
  output += minutes < 10 ? `0${minutes}:` : `${minutes}:`
  output += seconds < 10 ? `0${seconds}` : `${seconds}`
  return output
}

console.log(timeFormatFromSeconds(0))
console.log(timeFormatFromSeconds(59))
console.log(timeFormatFromSeconds(60))
console.log(timeFormatFromSeconds(90))
console.log(timeFormatFromSeconds(3599))
console.log(timeFormatFromSeconds(3600))
console.log(timeFormatFromSeconds(45296))
console.log(timeFormatFromSeconds(86399))
console.log(timeFormatFromSeconds(86400))
console.log(timeFormatFromSeconds(359999))
console.log(timeFormatFromSeconds(329073459999))
