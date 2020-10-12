// REVERSE

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  return str.split('').reverse().join('');
}


//alternate solution without .reverse()

function reverse(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr+=str[i];
  }
  return reversedStr;
}

//alternate solution with .reduce()
function reverse(str) {
  return str.split('').reduce(function(acc, char) {
    return acc = char + acc;
  }, '');
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// PALINDROME

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  return str === str.split('').reverse().join('');
}



// _________________________________________________________________________________
// _________________________________________________________________________________

// REVERSE INT

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n >= 0) {
    return Number(n.toString().split('').reverse().join(''));
  } else {
    let nArr = n.toString().split('').reverse();
    nArr.pop();
    nArr.unshift('-');
    return Number(nArr.join(''));
  }
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// MAXCHAR

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {
  let charCount = {};
  let maxCount = 0;
  let maxChar;
  str.split('').forEach(function(char) {
    charCount[char] = charCount[char] || 1;
  })
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// FIZZBUZZ

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// CHUNK

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let newArr = [];
  let smallArr = [];
  while (array.length) {
    for (let i = 0; i < size; i++) {
      if (array.length) {
        smallArr.push(array.shift())
      }
    }
    newArr.push(smallArr);
    smallArr = [];
  }
 return newArr;
}

// ALTERNATE SOLUTION USING .SLICE()

function chunk(array, size) {
  let chunkedArr = [];
  let incrementor = 0;
  while (incrementor < array.length) {
    chunkedArr.push(array.slice(incrementor, incrementor + size));
    incrementor+=size;
  }
  return chunkedArr;
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// ANAGRAMS


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return stringA
  .replace(/[^a-zA-Z ]/g, "")
  .toLowerCase().split('')
  .sort().join('')
  ===
  stringB
  .replace(/[^a-zA-Z ]/g, "")
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// CAPITALIZE

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(' ');
  let newArr = [];
  strArr.forEach(function(word) {
    newArr.push(word[0].toUpperCase() + word.slice(1, word.length))
  })
  return newArr.join(' ');
}

module.exports = capitalize;
