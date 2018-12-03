"use strict";

const fs = require('fs');

//using non blocking call
fs.readFile('./Day1-input.txt', function(error, data){
        var floor = 0;
        data.toString()
                .split('')
                .forEach(direction => direction === '(' ? ++floor : --floor);
        console.log(floor);
});


//using blocking call
const INPUT = fs.readFileSync('./Day1-input.txt').toString();

const count = INPUT.split('')
                 .reduce((floor, direction) => 
                         direction === "(" ? ++floor : --floor, 0)             
console.log(count);
 
