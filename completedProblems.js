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
