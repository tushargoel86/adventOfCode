"use strict";

const fs = require('fs');
const INPUT = fs.readFileSync('./Day1-input.txt').toString();

//method 1
var floor = 0;
INPUT.split('').forEach(direction => direction === '(' ? ++floor : --floor);
console.log(floor);

//method 2
const count = INPUT.split('')
                 .reduce((floor, direction) =>
                         direction === "(" ? ++floor : --floor, 0)
console.log(count);
 