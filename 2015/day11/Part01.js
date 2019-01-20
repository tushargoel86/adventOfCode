"use strict";

//password match conditions
//condition 1: Password must contain sequence of atleast 3 increasing characters
//ex: abc, bcd, cde ...
function ascii(a) {
    return a.charCodeAt(0);
}

const isContainStraightIncreasingSymbols = 
                                    string => string.split('')
                                    .map(char => char.charCodeAt(0))
                                    .some((char, index, arr) => arr[index] === arr[index + 1] - 1 
                                            && arr[index + 1] === arr[index + 2] - 1);

//condition 2: Password should not have 'i', 'o', 'l'
const isPasswordMatched = str => /i|o|l/.test(str);

//condition 3:  Password should have atleast 2 overalpping different pairs
//ex: aa, bb, cc
function hasMinimumDuplilcatePair(input, size = 2) {
    if (input.length == 0) return false;

    var pairs = new Set();

    [...Array(input.length - 1)].map((_, i) => {
        if (input[i] === input[i + 1]) {
            pairs.add(input.charAt(i) + input.charAt(i + 1));
        }
    });

    return pairs.size >= size;
}

const isValidPassword = pwd => isContainStraightIncreasingSymbols(pwd)
                                && !isPasswordMatched(pwd)
                                && hasMinimumDuplilcatePair(pwd);

 

//increments char by 1
const incrementChar = char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
 
const incrementStr = string => {
    var nextChar = incrementChar(string.slice(-1));
    return nextChar === 'a'
             ? incrementStr(string.slice(0, -1)) + 'a' 
             : string.slice(0, -1) + nextChar;

};
  
let result = 'cqjxxyzz';
while (!isValidPassword(result)) {
    result = incrementStr(result);
}

console.log(result);

