"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('day03-Input.txt').toString();

//const INPUT = "^>v<";
//to store all the positions
var positions = new Set().add('0x0');
var startingPos = `0x0`;

var santaDirec = INPUT.split('').filter((direction, index) => index % 2 === 0);
var roboSantaDirec = INPUT.split('').filter((direction, index) => index % 2 !== 0);

var housesVisited = direction => {
    direction
        .reduce((currentPos, direction) => {
            var allPos = positions;

            switch (direction) {
                case '^': return storePosition({ x: ++currentPos.x, y: currentPos.y });
                case 'v': return storePosition({ x: --currentPos.x, y: currentPos.y });
                case '>': return storePosition({ x: currentPos.x, y: ++currentPos.y });
                case '<': return storePosition({ x: currentPos.x, y: --currentPos.y });
            }

            function storePosition(currPos) {
                //to find if an object already present or not
                allPos.add(`${currPos.x}x${currPos.y}`)
                return currPoblueimp-md5s;
            };
        }, { x: 0, y: 0 }); //initialize current position as (0, 0)
    }


housesVisited(santaDirec);
housesVisited(roboSantaDirec);
console.log(positions.size)
