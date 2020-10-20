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


// _________________________________________________________________________________
// _________________________________________________________________________________

// STEPS

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '#';
  let counter = n;

   for (let i = 1; i < n; i++) {
    str+=' ';
  }

  while (counter) {
    console.log(str, str.length)
    str = str.slice(0, str.length - 1);
    str = '#' + str;
    counter--;
  }
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// PYRAMID

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let counter = n;
  let row = '#';
  let longestRow = n - 1;
  let center;
  let i = 1;
  while (longestRow) {
    row = ' ' + row + ' ';
    longestRow--;
  }
  row = row.split('');
  center = Math.floor(row.length / 2);
  while (counter) {
    console.log(row.join(''));
    row[center + i] = '#';
    row[center - i] = '#';
    counter--;
    i++;
  }
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// VOWELS


// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = 'aeiou';
  let vowelCounter = 0;
  str.toLowerCase().split('').forEach(function(char) {
    if (vowels.split('').includes(char)) {
      vowelCounter++;
    }
  })
  return vowelCounter;
}

// _________________________________________________________________________________
// _________________________________________________________________________________


//matrix

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let largeArr = [];
  let incrementor = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  for (let i = 0; i < n; i++) {
    largeArr.push([]);
  }

  while (colStart <= colEnd && rowStart <= rowEnd) {

  //row
    for (let i = colStart; i <= colEnd; i++) {
        largeArr[rowStart][i] = incrementor;
        incrementor++;
      }
    rowStart++;

  //col
    for (let i = rowStart; i <= rowEnd; i++) {
        largeArr[i][colEnd] = incrementor;
        incrementor++;
      }
    colEnd--;

  //row
    for (let i = colEnd; i >= colStart; i--) {
      largeArr[rowEnd][i] = incrementor;
      incrementor++;
    }
    rowEnd--;

  //col
    for (let i = rowEnd; i >= rowStart; i--) {
        largeArr[i][colStart] = incrementor;
      incrementor++;
    }
    colStart++;

  }

  return largeArr;
}


// _________________________________________________________________________________
// _________________________________________________________________________________

//FIBONACCI ITERATIVE

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibonacci = [];
  for (let i = 0; i <= n; i++) {
    if (fibonacci.length < 2) {
      fibonacci.push(i)
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  return fibonacci[n];
}

// _________________________________________________________________________________
// _________________________________________________________________________________

// QUEUE IMPLEMENTATION

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.unshift(item);
  }

  remove() {
    return this.queue.pop();
  }
}
