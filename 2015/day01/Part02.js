"use strict";

const fs = require('fs');

//using non blocking and callback function
fs.readFile('./Day1-input.txt', function(error, data){
        let floor = 0;
        let indices = data.toString()
                        .split('')
                        .map(direction => direction === '(' ? ++floor : --floor);
        console.log(indices);
        let index = indices.indexOf(-1);
        console.log(index);
}); 