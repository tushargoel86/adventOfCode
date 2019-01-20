"use strict";

const fs = require('fs');
const INPUT = fs.readFileSync('input.txt', 'utf-8').split('\n');

INPUT.map(line => eval(line)).forEach(data => console.log(data)
);
const result = INPUT.reduce((acc, line) => acc + (line.length - eval(line).length), 0);

console.log(result);