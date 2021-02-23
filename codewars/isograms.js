/*
* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
* */

const isIsogram = (str) => str.length === new Set(str.toLowerCase()).size

// Интересные решения (не мои)
// const isIsogram = (str) => !str.match(/([a-z]).*\1/i);
// const isIsogram = (str) => !/(\w).*\1/i.test(str)

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false // -- ignore letter case