const letters = []

let str = 'Backend As A Service'

function pushFirstLetters (arr, str) {
  str = str.split(' ')

  for (let i = 0; i < str.length; i++) {
    let firstLetter = str[i].slice(0, 1)
    arr.push(firstLetter)
  }
  return arr
}
