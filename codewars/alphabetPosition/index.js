const ASCII_START_ALPHABET = 97
const ASCII_END_ALPHABET = 122

const str1 = 'The sunset sets at twelve o\' clock.'
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
const str2 = 'The narwhal bacons at midnight.'
// 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20

const calcPos = letter => letter.charCodeAt(0) - ASCII_START_ALPHABET + 1

const filterStr = letter => {
  const asciiIdx = letter.charCodeAt(0)
  return asciiIdx >= ASCII_START_ALPHABET && asciiIdx <= ASCII_END_ALPHABET
}

const alphabetPosition = (string) => {
  return String(string)
    .toLowerCase()
    .split('')
    .filter(filterStr)
    .map(calcPos)
    .join(' ')
}

const alphabetPositionV2 = (string) => {
  return String(string)
    .toLowerCase()
    .match(/[a-z]/g)
    .map(calcPos)
    .join(' ')
}

console.log(alphabetPosition(str1))
console.log(alphabetPositionV2(str1))
console.log(alphabetPosition(str2))
console.log(alphabetPositionV2(str2))